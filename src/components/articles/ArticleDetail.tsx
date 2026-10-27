import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getArticleBySlug, getArticles } from '@/lib/markdown'
import { ArticleType } from '@/lib/types'
import { articleSections } from '@/lib/article-sections'
import Button from '@/components/ui/Button'

export function getArticleMetadata(slug: string, type: ArticleType): Metadata {
  const article = getArticleBySlug(slug, type)
  if (!article) notFound()

  return {
    title: `${article.title} - ${articleSections[type].name}`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      tags: article.tags,
    },
  }
}

export default function ArticleDetail({ slug, type }: { slug: string; type: ArticleType }) {
  const article = getArticleBySlug(slug, type)
  if (!article) notFound()

  const section = articleSections[type]
  const articles = getArticles(type)
  const index = articles.findIndex(item => item.slug === slug)
  const adjacent = [
    { label: `Previous ${section.itemLabel}`, article: articles[index - 1] },
    { label: `Next ${section.itemLabel}`, article: articles[index + 1] },
  ]

  return (
    <article className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button href={`/${type}`} variant="outline-dark" className="inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Back to {section.name}
          </Button>
        </div>
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy-50 text-navy-700">
              <Tag className="w-3 h-3 mr-1" aria-hidden="true" />
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>
          {type === 'blog' && <p className="text-xl text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>}
          <div className="flex items-center text-gray-600 mb-6">
            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
            <time dateTime={article.date}>{article.date}</time>
          </div>
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          )}
        </header>
        <div className="article-content prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-600 prose-li:text-gray-600">
          <MDXRemote source={article.content} />
        </div>
        {adjacent.some(item => item.article) && (
          <nav aria-label={`${section.name} article navigation`} className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {adjacent.map((item, position) => item.article && (
                <div key={item.label} className={position === 1 ? 'md:col-start-2' : undefined}>
                  <p className="text-sm font-medium text-gray-500 mb-2">{item.label}</p>
                  <Link href={`/${type}/${item.article.slug}`} className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                    <h2 className="font-semibold text-gray-900 group-hover:text-navy-600 transition-colors">{item.article.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">{item.article.excerpt.slice(0, 100)}…</p>
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        )}
        <div className="mt-16 text-center bg-navy-50 rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {type === 'blog' ? 'Bring These Practices into Your Organization' : 'Interested in Similar Results?'}
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {type === 'blog'
              ? 'Explore how to apply these ideas to your organization’s workflows. We’d be glad to talk.'
              : 'Let’s discuss how we can help your organization achieve similar success through strategic process optimization and transformation.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">{type === 'blog' ? 'Contact Us' : 'Start Your Project'}</Button>
            <Button href={`/${type}`} variant="outline-dark">{type === 'blog' ? 'View More Articles' : 'View More Case Studies'}</Button>
          </div>
        </div>
      </div>
    </article>
  )
}
