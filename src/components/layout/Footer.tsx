import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-bold text-white mb-4">
                Yottabyte
              </h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Expert business process consulting to optimize workflows, 
                reduce inefficiencies, and drive sustainable growth for your organization.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                <Link 
                  href="/about" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link 
                  href="/portfolio" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
                <Link 
                  href="/blog"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
								{/*PRIVACY: TODO*/}
                {/*<Link */}
                {/*  href="/privacy" */}
                {/*  className="block text-gray-300 hover:text-white transition-colors"*/}
                {/*>*/}
                {/*  Privacy Policy*/}
                {/*</Link>*/}
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-8 pt-8 border-t border-navy-600">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Yottabyte Pte. Ltd. All rights reserved.
              </p>
              {/*<p className="text-gray-400 text-sm mt-2 md:mt-0">*/}
              {/*  Built with Next.js and Tailwind CSS*/}
              {/*</p>*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
