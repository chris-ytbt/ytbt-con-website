'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send } from 'lucide-react'
import { ContactFormData } from '@/lib/types'
import Button from './Button'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<ContactFormData>()
  const messageValue = watch('message') || ''

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
        })
        reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitMessage({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { 
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-navy-500 focus:border-navy-500"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-navy-500 focus:border-navy-500"
          placeholder="your.email@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          {...register('company')}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-navy-500 focus:border-navy-500"
          placeholder="Your company name"
        />
      </div>

      {/* Service Interest Field */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service Interest *
        </label>
        <select
          id="service"
          {...register('service', { required: 'Please select a service of interest' })}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-500 focus:border-navy-500"
        >
          <option value="">Select a service...</option>
          <option value="all">All Services</option>
          <option value="workflow-diagnosis">Workflow Diagnosis</option>
          <option value="process-design">Business Process Design</option>
          <option value="change-management">Change Management</option>
          <option value="process-automation">Process Automation</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message *
          </label>
          <span className={`text-sm ${
            messageValue.length > 980 ? 'text-red-600' : 
            messageValue.length > 900 ? 'text-orange-600' : 
            'text-gray-500'
          }`}>
            {messageValue.length}/980
          </span>
        </div>
        <textarea
          id="message"
          rows={5}
          {...register('message', { 
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
            maxLength: { value: 980, message: 'Message must be 980 characters or less' }
          })}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-navy-500 focus:border-navy-500"
          placeholder="Tell us about your project and how we can help..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
        {messageValue.length > 950 && !errors.message && (
          <p className={`mt-1 text-sm ${messageValue.length > 980 ? 'text-red-600' : 'text-orange-600'}`}>
            {messageValue.length > 980 
              ? `Please remove ${messageValue.length - 980} characters` 
              : `${980 - messageValue.length} characters remaining`
            }
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>

      {/* Submit Message */}
      {submitMessage && (
        <div className={`p-4 rounded-md ${
          submitMessage.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {submitMessage.message}
        </div>
      )}
    </form>
  )
}