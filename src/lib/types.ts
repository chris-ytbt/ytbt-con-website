export type ArticleType = 'portfolio' | 'blog'

export interface Article {
  type: ArticleType
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  excerpt: string
  featured: boolean
  content: string
}

export interface Service {
  title: string
  description: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  service: string
  message: string
}
