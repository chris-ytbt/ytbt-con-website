import { getArticles } from '@/lib/markdown'
import ArticleDetail, { getArticleMetadata } from '@/components/articles/ArticleDetail'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getArticles('portfolio').map(article => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  return getArticleMetadata((await params).slug, 'portfolio')
}

export default async function PortfolioArticlePage({ params }: PageProps) {
  return <ArticleDetail slug={(await params).slug} type="portfolio" />
}
