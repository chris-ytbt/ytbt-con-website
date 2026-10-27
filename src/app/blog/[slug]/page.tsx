import { getArticles } from '@/lib/markdown'
import ArticleDetail, { getArticleMetadata } from '@/components/articles/ArticleDetail'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getArticles('blog').map(article => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  return getArticleMetadata((await params).slug, 'blog')
}

export default async function BlogArticlePage({ params }: PageProps) {
  return <ArticleDetail slug={(await params).slug} type="blog" />
}
