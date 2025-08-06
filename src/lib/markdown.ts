import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PortfolioPost } from './types'

const postsDirectory = path.join(process.cwd(), 'src/content/portfolio')

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter(name => name.endsWith('.md'))
}

export function getPostBySlug(slug: string): PortfolioPost | null {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug: realSlug,
      title: data.title || '',
      date: data.date || '',
      category: data.category || '',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      featured: data.featured || false,
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): PortfolioPost[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is PortfolioPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  
  return posts
}

export function getFeaturedPosts(): PortfolioPost[] {
  return getAllPosts().filter(post => post.featured)
}