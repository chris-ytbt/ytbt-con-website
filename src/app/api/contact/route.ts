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

async function sendDiscordNotification(formData: ContactFormData): Promise<void> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  
  if (!webhookUrl) {
    console.warn('Discord webhook URL not configured')
    return
  }

  const embed = {
    title: '📬 New Contact Form Submission',
    color: 0x1e3a8a, // Navy blue color
    timestamp: new Date().toISOString(),
    fields: [
      {
        name: '👤 Name',
        value: formData.name,
        inline: true
      },
      {
        name: '📧 Email', 
        value: formData.email,
        inline: true
      },
      {
        name: '🏢 Company',
        value: formData.company || 'Not specified',
        inline: true
      },
      {
        name: '💼 Service Interest',
        value: formData.service,
        inline: false
      },
      {
        name: '💬 Message',
        value: formData.message.length > 1000 
          ? formData.message.substring(0, 1000) + '...' 
          : formData.message,
        inline: false
      }
    ],
    footer: {
      text: 'Yottabyte Contact Form',
      icon_url: 'https://cdn-icons-png.flaticon.com/512/726/726623.png'
    }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed]
      })
    })

    if (!response.ok) {
      throw new Error(`Discord webhook failed: ${response.status}`)
    }

    console.log('Discord notification sent successfully')
  } catch (error) {
    console.error('Failed to send Discord notification:', error)
    // Don't throw error - we don't want to fail the contact form if Discord is down
  }
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

    // Message length validation
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    if (body.message.length > 980) {
      return NextResponse.json(
        { error: 'Message must be 980 characters or less' },
        { status: 400 }
      )
    }

    // Log the contact form data
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      company: body.company,
      service: body.service,
      message: body.message,
      ip: ip
    })

    // Send notification to Discord via webhook
    await sendDiscordNotification(body)

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

