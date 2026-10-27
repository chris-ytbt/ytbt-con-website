import { Metadata } from 'next'
import ArticleList from '@/components/articles/ArticleList'
import { articleSections } from '@/lib/article-sections'

export const metadata: Metadata = {
  title: 'Blog',
  description: articleSections.blog.description,
}

export default function BlogPage() {
  return <ArticleList type="blog" />
}
