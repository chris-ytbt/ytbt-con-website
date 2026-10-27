import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article, ArticleType } from './types'

const articlesDirectory = path.join(process.cwd(), 'src/content/articles')

export function getArticleBySlug(slug: string, type?: ArticleType): Article | null {
  // Only allow a single filename; route parameters must never escape the content folder.
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null

  const fullPath = path.join(articlesDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
  if (data.type !== 'portfolio' && data.type !== 'blog') {
    throw new Error(`Article ${slug} must specify type: portfolio or blog`)
  }
  if (type && data.type !== type) return null
  if (typeof data.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
    throw new Error(`Article ${slug} must specify a quoted YYYY-MM-DD date`)
  }

  return {
    slug,
    type: data.type,
    title: data.title || '',
    date: data.date,
    category: data.category || '',
    tags: data.tags || [],
    excerpt: data.excerpt || '',
    featured: data.featured || false,
    content,
  }
}

export function getArticles(type?: ArticleType): Article[] {
  if (!fs.existsSync(articlesDirectory)) return []

  return fs.readdirSync(articlesDirectory)
    .filter(name => name.endsWith('.md'))
    .map(name => getArticleBySlug(name.slice(0, -3), type))
    .filter((article): article is Article => article !== null)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
}
