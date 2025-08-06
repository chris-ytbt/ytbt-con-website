import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/markdown'
import { formatDate } from '@/lib/utils'
import { Metadata } from 'next'
import Button from '@/components/ui/Button'

interface PortfolioPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PortfolioPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${post.title} - Portfolio`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function PortfolioPostPage({ params }: PortfolioPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <article className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button href="/portfolio" variant="outline" className="inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy-50 text-navy-700">
              <Tag className="w-3 h-3 mr-1" />
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-600 prose-li:text-gray-600">
          <MDXRemote source={post.content} />
        </div>

        {/* Navigation */}
        <nav className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevPost && (
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Previous Case Study</p>
                <Link
                  href={`/portfolio/${prevPost.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-navy-600 transition-colors">
                    {prevPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{prevPost.excerpt.slice(0, 100)}...</p>
                </Link>
              </div>
            )}
            
            {nextPost && (
              <div className={prevPost ? '' : 'md:col-start-2'}>
                <p className="text-sm font-medium text-gray-500 mb-2">Next Case Study</p>
                <Link
                  href={`/portfolio/${nextPost.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-navy-600 transition-colors">
                    {nextPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{nextPost.excerpt.slice(0, 100)}...</p>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-navy-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in Similar Results?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your organization achieve similar success 
            through strategic process optimization and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Start Your Project
            </Button>
            <Button href="/portfolio" variant="outline-dark" size="lg">
              View More Case Studies
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}