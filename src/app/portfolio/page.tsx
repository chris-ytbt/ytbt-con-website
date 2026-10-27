import { Metadata } from 'next'
import ArticleList from '@/components/articles/ArticleList'
import { articleSections } from '@/lib/article-sections'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: articleSections.portfolio.description,
}

export default function PortfolioPage() {
  return <ArticleList type="portfolio" />
}
