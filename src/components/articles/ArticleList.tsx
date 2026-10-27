import { getArticles } from '@/lib/markdown'
import { ArticleType } from '@/lib/types'
import { articleSections } from '@/lib/article-sections'
import ArticleCard from './ArticleCard'
import Button from '@/components/ui/Button'

export default function ArticleList({ type }: { type: ArticleType }) {
  const section = articleSections[type]
  const articles = getArticles(type)

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{section.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{section.subtitle}</p>
        </div>
        {articles.length > 0 ? (
          <section aria-label={section.heading}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{section.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(article => <ArticleCard key={article.slug} article={article} />)}
            </div>
          </section>
        ) : (
          <div className="text-center py-16 mx-auto max-w-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.emptyTitle}</h2>
            <p className="text-gray-600 mb-8">{section.emptyDescription}</p>
            <Button href="/contact">Contact Us</Button>
          </div>
        )}
        <div className="mt-24 text-center bg-gray-50 rounded-lg p-6 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Processes?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help optimize your workflows and achieve lasting improvements for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Start Your Project</Button>
            <Button href="/about" variant="outline-dark">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
