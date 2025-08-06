import { getAllPosts } from '@/lib/markdown'
import PortfolioCard from '@/components/portfolio/PortfolioCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Previous projects and case studies.',
}

export default function PortfolioPage() {
  const posts = getAllPosts()

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we&apos;ve helped organizations transform their business processes, 
            reduce inefficiencies, and achieve their goals.
          </p>
        </div>

        {/* Portfolio Grid */}
        {posts.length > 0 ? (
          <>
            {/* Featured Posts: TODO */}
            {/*<div className="mb-16">*/}
            {/*  <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Case Studies</h2>*/}
            {/*  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">*/}
            {/*    {posts*/}
            {/*      .filter(post => post.featured)*/}
            {/*      .slice(0, 2)*/}
            {/*      .map((post) => (*/}
            {/*        <PortfolioCard key={post.slug} post={post} />*/}
            {/*      ))}*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PortfolioCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto max-w-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                No case studies available yet
              </h3>
              <p className="text-gray-600 mb-8">
                We&apos;re currently working on showcasing our portfolio of successful projects. 
                Please check back soon or contact us to learn about our recent work.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy-600 hover:bg-navy-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-24 text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Processes?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help optimize your workflows and achieve similar results 
            for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-navy-600 hover:bg-navy-700 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-navy-600 text-base font-medium rounded-md text-navy-600 bg-white hover:bg-navy-50 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}