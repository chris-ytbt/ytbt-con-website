import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData } from '@/lib/types'

// Rate limiting (simple in-memory store - for production use Redis)
const rateLimitStore = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_MAX = 5 // max requests per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, lastReset: now })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }

  entry.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               '127.0.0.1'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.service || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // For now, we'll log the contact form data
    // In production, you would integrate with email service (Resend, SendGrid, etc.)
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      company: body.company,
      service: body.service,
      message: body.message,
      ip: ip
    })

    // TODO: Implement email sending
    // Example with Resend:
    // const { Resend } = require('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // 
    // await resend.emails.send({
    //   from: 'website@yottabyte.com',
    //   to: 'contact@yottabyte.com',
    //   subject: `New Contact Form Submission from ${body.name}`,
    //   html: generateEmailTemplate(body)
    // })

    return NextResponse.json({ 
      success: true, 
      message: 'Message received successfully' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// TODO: Email template generator (for future use with email service)
// Example implementation for when email service is integrated