import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Yottabyte Pte. Ltd.',
  description: 'Get in touch with Yottabyte Pte. Ltd. for business process consulting. We\'re here to help optimize your workflows and drive efficiency.',
}

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business processes? We&apos;d love to discuss how we can help 
            optimize your workflows and drive efficiency across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Let&apos;s Start the Conversation
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg">
                    <Mail className="w-6 h-6 text-navy-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@yottabyte.com</p>
                  <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg">
                    <Phone className="w-6 h-6 text-navy-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+65 6XXX XXXX</p>
                  <p className="text-sm text-gray-500">Monday to Friday, 9 AM - 6 PM SGT</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-navy-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-600">Singapore</p>
                  <p className="text-sm text-gray-500">Available for in-person meetings</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg">
                    <Clock className="w-6 h-6 text-navy-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">Within 24 hours</p>
                  <p className="text-sm text-gray-500">Typically much faster during business hours</p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-navy-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-navy-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm font-semibold">1</span>
                  </div>
                  <p className="ml-3 text-gray-600 text-sm">
                    Initial consultation to understand your needs and challenges
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-navy-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm font-semibold">2</span>
                  </div>
                  <p className="ml-3 text-gray-600 text-sm">
                    Customized proposal with clear scope, timeline, and deliverables
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-navy-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm font-semibold">3</span>
                  </div>
                  <p className="ml-3 text-gray-600 text-sm">
                    Collaborative implementation with regular progress updates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our consulting services and engagement process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What&apos;s the typical engagement duration?
              </h3>
              <p className="text-gray-600">
                Most projects range from 3-6 months depending on scope and complexity. 
                We provide detailed timelines during the proposal phase.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you work with small businesses?
              </h3>
              <p className="text-gray-600">
                Yes, we work with organizations of all sizes. Our approach is tailored 
                to your specific needs and budget constraints.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What industries do you specialize in?
              </h3>
              <p className="text-gray-600">
                We have experience across manufacturing, technology, healthcare, and 
                financial services, with transferable methodologies.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do you measure success?
              </h3>
              <p className="text-gray-600">
                We establish clear KPIs at project start and provide regular progress 
                reports with measurable improvements and ROI calculations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}