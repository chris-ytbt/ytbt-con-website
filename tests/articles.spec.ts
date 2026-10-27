import { expect, test } from '@playwright/test'

test.use({ baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000' })

const blogSlug = 'why-ai-productivity-gains-dont-scale'
const portfolioSlug = 'content-pipeline-management'

test('Blog is between Portfolio and About, with the requested card metadata', async ({ page }, testInfo) => {
  await page.goto('/blog')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Blog')
  await expect(page.locator('header nav a:visible')).toHaveText([
    'Yottabyte', 'Home', 'Portfolio', 'Blog', 'About', 'Contact',
  ])
  const card = page.locator('main article')
  await expect(card).toHaveCount(1)
  await expect(card).toContainText('Organization & Process')
  await expect(card.locator('time')).toHaveText('2026-10-25')
  await expect(card.getByRole('link', { name: 'Read article', exact: true })).toHaveAttribute('href', `/blog/${blogSlug}`)
  await expect(card).not.toContainText('Read Case Study')
  await expect(card).not.toContainText('organizational productivity')
  await page.screenshot({ path: testInfo.outputPath('blog-desktop.png'), fullPage: true })
  await card.getByRole('link', { name: 'Read article', exact: true }).click()
  await expect(page).toHaveURL(new RegExp(`/blog/${blogSlug}$`))
})

test('Blog preserves the complete rich article without duplicate page chrome', async ({ page }, testInfo) => {
  await page.goto(`/blog/${blogSlug}`)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Why AI Productivity Gains Don’t Scale')
  await expect(page.locator('main > article > div > header')).toContainText('Organization & Process')
  await expect(page.locator('main > article > div > header time')).toHaveText('2026-10-25')
  await expect(page.locator('.article-content .quadrant')).toHaveCount(4)
  await expect(page.locator('.article-content .response-table tbody tr')).toHaveCount(4)
  await expect(page.locator('.article-content #references li')).toHaveCount(11)
  await expect(page.locator('.article-content')).toContainText('A completed experiment can validly conclude that no candidate beat the baseline.')
  await expect(page.locator('.article-content #ref-11 a')).toHaveAttribute('href', 'https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/')
  await expect(page.locator('.article-content')).toContainText('Organizational productivity depends on what people can reliably finish, understand and use together.')
  await expect(page.locator('.article-content')).not.toContainText('AI ADOPTION')
  await expect(page.locator('.article-content')).not.toContainText('WORK WITH YOTTABYTE')
  await expect(page.locator('.article-content')).not.toContainText('adapted from slide 20')
  await expect(page.getByRole('link', { name: 'Back to Blog' })).toHaveAttribute('href', '/blog')
  await expect(page.locator('main article a[href^="/portfolio/"]')).toHaveCount(0)
  await page.locator('.article-content figure').screenshot({ path: testInfo.outputPath('blog-framework-desktop.png'), style: 'body > header { visibility: hidden; }' })
})

test('Portfolio keeps its existing URLs, content, and section-specific navigation', async ({ page }) => {
  await page.goto('/portfolio')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Our Portfolio')
  await expect(page.locator('main article')).toHaveCount(2)
  await expect(page.locator('main article').first().locator('time')).toHaveText('2025-06-01')
  await expect(page.getByRole('link', { name: 'Read Case Study', exact: true })).toHaveCount(2)
  await expect(page.locator('main')).not.toContainText('Why AI Productivity')
  await page.goto(`/portfolio/${portfolioSlug}`)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Content Pipeline Management for Game Studio')
  await expect(page.locator('.article-content')).toContainText('Challenge')
  await expect(page.getByRole('link', { name: 'Back to Portfolio' })).toHaveAttribute('href', '/portfolio')
  await expect(page.getByRole('navigation', { name: 'Portfolio article navigation' }).locator('a')).toHaveCount(1)
  await expect(page.locator('main article a[href^="/blog/"]')).toHaveCount(0)
})

test('Article types cannot leak into the other section and missing articles return 404', async ({ request }) => {
  for (const path of [`/portfolio/${blogSlug}`, `/blog/${portfolioSlug}`, '/blog/nonexistent-article']) {
    const response = await request.get(path)
    expect(response.status(), path).toBe(404)
  }
})

test('The sitemap includes both article collections', async ({ request }) => {
  const response = await request.get('/sitemap.xml')
  expect(response.ok()).toBeTruthy()
  const xml = await response.text()
  expect(xml).toContain(`/blog/${blogSlug}</loc>`)
  expect(xml).toContain(`/portfolio/${portfolioSlug}</loc>`)
  expect(xml).toContain('/blog</loc>')
  expect(xml).not.toContain(`/portfolio/${blogSlug}`)
})

test('Mobile navigation and article layouts remain usable at 390px', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Toggle mobile menu' })
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('header nav a:visible')).toHaveText([
    'Yottabyte', 'Home', 'Portfolio', 'Blog', 'About', 'Contact',
  ])
  await page.locator('header nav').getByRole('link', { name: 'Blog', exact: true }).last().click()
  await expect(page).toHaveURL(/\/blog$/)
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await page.screenshot({ path: testInfo.outputPath('blog-mobile.png'), fullPage: true })
  await page.getByRole('link', { name: 'Read article', exact: true }).click()
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.locator('.article-content .quadrant')).toHaveCount(4)
  const tableRegion = page.getByRole('region', { name: 'Responses to the three AI adoption pitfalls' })
  await expect(tableRegion).toHaveAttribute('tabindex', '0')
  expect(await tableRegion.evaluate(element => element.scrollWidth > element.clientWidth)).toBeTruthy()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy()
  await page.screenshot({ path: testInfo.outputPath('blog-article-mobile.png') })
  await page.locator('.article-content figure').screenshot({ path: testInfo.outputPath('blog-framework-mobile.png'), style: 'body > header { visibility: hidden; }' })
})

test('Framework axes stay between the correct quadrants and discussion icons locate A through D', async ({ page }, testInfo) => {
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(`/blog/${blogSlug}`)
    const figure = page.locator('.article-content figure')
    const geometry = await figure.evaluate(element => {
      const bounds = (selector: string) => {
        const target = element.querySelector(selector)
        if (!target) throw new Error(`Missing framework element: ${selector}`)
        const { left, top, right, bottom, width, height } = target.getBoundingClientRect()
        return { left, top, right, bottom, width, height }
      }
      return {
        a: bounds('[aria-labelledby="quadrant-a"]'),
        b: bounds('[aria-labelledby="quadrant-b"]'),
        c: bounds('[aria-labelledby="quadrant-c"]'),
        d: bounds('[aria-labelledby="quadrant-d"]'),
        x: bounds('.framework-axis-x'),
        y: bounds('.framework-axis-y'),
      }
    })
    const { a, b, c, d, x, y } = geometry
    expect(a.top).toBeCloseTo(c.top, 0)
    expect(b.top).toBeCloseTo(d.top, 0)
    expect(a.left).toBeCloseTo(b.left, 0)
    expect(c.left).toBeCloseTo(d.left, 0)
    expect(x.top).toBeGreaterThan(a.bottom)
    expect(x.bottom).toBeLessThan(b.top)
    expect(y.left).toBeGreaterThan(a.right)
    expect(y.right).toBeLessThan(c.left)
    expect(x.height).toBeGreaterThanOrEqual(2)
    expect(y.width).toBeGreaterThanOrEqual(2)
    const labels = figure.locator('.framework-y-label span')
    await expect(labels).toHaveText(['Task execution: structured and known', 'Task execution: unstructured'])
    for (const label of await labels.all()) {
      const box = await label.boundingBox()
      expect(box!.height).toBeGreaterThan(box!.width * 3)
      expect(box!.x + box!.width).toBeLessThan(a.left)
    }
    await expect(figure).not.toContainText('Yottabyte framework. Rows move')
    for (const [quadrant, expectedX, expectedY] of [['A', '2', '2'], ['B', '2', '13'], ['C', '13', '2'], ['D', '13', '13']]) {
      const heading = page.getByRole('heading', { name: new RegExp(`^${quadrant}:`) })
      const highlighted = heading.locator('svg rect[fill="#1e40af"]')
      await expect(heading.locator('svg rect')).toHaveCount(4)
      await expect(highlighted).toHaveCount(1)
      await expect(highlighted).toHaveAttribute('x', expectedX)
      await expect(highlighted).toHaveAttribute('y', expectedY)
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy()
    await page.locator('.quadrant-discussion-title').first().screenshot({ path: testInfo.outputPath(`quadrant-tracker-${width}.png`), style: 'body > header { visibility: hidden; }' })
  }
})
