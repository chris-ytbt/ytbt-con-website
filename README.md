Yottabyte's Next.js website with Portfolio case studies and Blog articles.

## Publishing articles

Both sections use the same Markdown/MDX format and the same `Article` model, loader,
cards, listing, and detail components. All content lives in `src/content/articles/`.
Create a file named with a unique lowercase, hyphenated slug, for example
`improving-team-workflows.md`:

```yaml
---
type: blog # blog or portfolio
title: "Improving Team Workflows"
date: "2026-10-27" # quoted YYYY-MM-DD publication date
category: "Organization & Process"
tags: ["process design", "teamwork"]
excerpt: "A short summary used on cards and in page metadata."
featured: false
---
```

Write the article body below the frontmatter using Markdown or static MDX markup.
Do not include a page header, title, navigation, or site footer; the shared template
renders these. Only commit trusted, reviewed MDX. The renderer uses
`next-mdx-remote` 6 with its default JavaScript-expression blocking enabled;
use static markup rather than executable expressions in article content.

The `type` selects `/blog/<slug>` or `/portfolio/<slug>`. Lists are sorted by
publication date, newest first, and previous/next links stay within that section.
Cards show the category and publication date without repeating topic tags. Topic
tags remain available on detail pages. Both sections are included in the sitemap.
Publishing is immediate on deployment; `date` is a display/sort value, not a scheduler.

Run `npm run build` before committing. Pushing to the Vercel production branch
triggers a new deployment when the Git integration is enabled. Set
`DISCORD_WEBHOOK_URL` in Vercel for contact notifications and `NEXT_PUBLIC_SITE_URL`
to the production origin for sitemap URLs.

## Regression checks

After `npm run build`, start the production server with `npm start`. In another
terminal, run `npx playwright test --project="Microsoft Edge" --workers=1`.
Set `PLAYWRIGHT_BASE_URL` if the server uses a different origin or port. The tests
cover desktop/mobile navigation, article content, section isolation, existing
Portfolio URLs, and sitemap entries. They never submit the contact form.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
