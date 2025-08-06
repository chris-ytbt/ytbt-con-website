import Link from 'next/link'
import { Calendar, Tag } from 'lucide-react'
import { PortfolioPost } from '@/lib/types'
import { formatDate } from '@/lib/utils'

interface PortfolioCardProps {
  post: PortfolioPost
}

export default function PortfolioCard({ post }: PortfolioCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy-50 text-navy-700">
            <Tag className="w-3 h-3 mr-1" />
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-navy-600 transition-colors">
          <Link href={`/portfolio/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {formatDate(post.date)}
          </div>
          
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex items-center space-x-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className="text-xs text-gray-500">
                  +{post.tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Read More Link */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link
            href={`/portfolio/${post.slug}`}
            className="text-navy-600 hover:text-navy-700 font-medium text-sm inline-flex items-center group/link"
          >
            Read Case Study
            <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}