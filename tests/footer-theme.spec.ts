import { test, expect } from '@playwright/test';

test('check footer theme on localhost', async ({ page }) => {
  // Navigate to the local development server
  await page.goto('http://localhost:3000');

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Scroll to the footer to ensure it's visible
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Take a screenshot of the full page including footer
  await page.screenshot({ 
    path: 'footer-theme-full-page.png', 
    fullPage: true 
  });

  // Find the footer element and take a focused screenshot
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
  
  await footer.screenshot({ 
    path: 'footer-theme-focus.png' 
  });

  // Check if footer has the expected navy theme styling
  const footerBgColor = await footer.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor;
  });

  console.log('Footer background color:', footerBgColor);

  // Log footer classes for debugging
  const footerClasses = await footer.evaluate((el) => el.className);
  console.log('Footer classes:', footerClasses);
});