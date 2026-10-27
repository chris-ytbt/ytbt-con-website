import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy'
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-gray max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us, such as when you:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Contact us through our website forms</li>
            <li>Request information about our services</li>
            <li>Subscribe to our communications</li>
            <li>Engage with our consulting services</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Information</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
            <li><strong>Professional Information:</strong> Job title, industry, business requirements</li>
            <li><strong>Communication Records:</strong> Messages, inquiries, and correspondence</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information (automatically collected)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Respond to your inquiries and provide requested information</li>
            <li>Deliver our business process consulting services</li>
            <li>Communicate with you about our services and industry insights</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Information Sharing</h2>
          <p className="text-gray-600 mb-6">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and conducting business</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Data Retention</h2>
          <p className="text-gray-600 mb-6">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Your Rights</h2>
          <p className="text-gray-600 mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your information in a structured format</li>
            <li><strong>Objection:</strong> Object to certain processing of your information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600 mb-6">
            Our website may use cookies and similar tracking technologies to enhance your experience. These technologies help us understand how you use our website and improve our services. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. International Data Transfers</h2>
          <p className="text-gray-600 mb-6">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy and applicable laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Changes to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this privacy policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 mb-2"><strong>Yottabyte Pte. Ltd.</strong></p>
            <p className="text-gray-600 mb-2">Email: <a href="mailto:support@ytbt.net" className="hover:text-navy-600 hover:underline">support@ytbt.net</a></p>
            <p className="text-gray-600">Address: 111 Somerset, #06-01Y, Singapore 238164</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              This privacy policy is designed to help you understand how we collect, use, and protect your information. 
              We are committed to maintaining the privacy and security of your personal data in accordance with applicable privacy laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
