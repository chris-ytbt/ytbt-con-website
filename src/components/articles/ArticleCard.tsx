import Link from 'next/link'
import { Calendar, Tag } from 'lucide-react'
import { Article } from '@/lib/types'
import { articleSections } from '@/lib/article-sections'

export default function ArticleCard({ article }: { article: Article }) {
  const href = `/${article.type}/${article.slug}`

  return (
    <article className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy-50 text-navy-700">
            <Tag className="w-3 h-3 mr-1" aria-hidden="true" />
            {article.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-navy-600 transition-colors">
          <Link href={href}>{article.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mt-auto">
          <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
          <time dateTime={article.date}>{article.date}</time>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link href={href} className="text-navy-600 hover:text-navy-700 font-medium text-sm inline-flex items-center group/link">
            {articleSections[article.type].readLabel}
            <span className="ml-1 transition-transform group-hover/link:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
