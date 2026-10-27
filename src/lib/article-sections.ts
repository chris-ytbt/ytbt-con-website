import { ArticleType } from './types'

export const articleSections = {
  portfolio: {
    name: 'Portfolio',
    title: 'Our Portfolio',
    subtitle: "Discover how we've helped organizations transform their business processes, reduce inefficiencies, and achieve their goals.",
    description: 'Previous projects and case studies.',
    heading: 'Case Studies',
    readLabel: 'Read Case Study',
    itemLabel: 'Case Study',
    emptyTitle: 'No case studies available yet',
    emptyDescription: "We're currently working on showcasing our portfolio of successful projects. Please check back soon or contact us to learn about our recent work.",
  },
  blog: {
    name: 'Blog',
    title: 'Blog',
    subtitle: 'Perspectives on organization, process, and technology to help teams turn ideas into lasting improvements.',
    description: 'Articles on organization, business processes, and technology from Yottabyte.',
    heading: 'Articles',
    readLabel: 'Read article',
    itemLabel: 'Article',
    emptyTitle: 'No articles available yet',
    emptyDescription: 'Our latest perspectives will appear here. Please check back soon.',
  },
} satisfies Record<ArticleType, {
  name: string
  title: string
  subtitle: string
  description: string
  heading: string
  readLabel: string
  itemLabel: string
  emptyTitle: string
  emptyDescription: string
}>
