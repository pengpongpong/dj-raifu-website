import { test, expect } from '@playwright/test';

test.describe("Test landing page", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Tesing ${testInfo}`)

    await page.goto("http://localhost:3000")
  })

  test("should have logo", async ({ page }) => {
    await expect(page.getByRole('img', { name: 'Dj Raifu logo' })).toBeVisible();
  });

  test("should have social links", async ({ page }) => {
    await expect(page.locator('nav').filter({ hasText: 'HomeÜber michKontakt' }).getByLabel('visit Soundcloud profile')).toBeVisible();
    await expect(page.locator('nav').filter({ hasText: 'HomeÜber michKontakt' }).getByLabel('visit Instagram DJ Raifu')).toBeVisible();
    await expect(page.locator('nav').filter({ hasText: 'HomeÜber michKontakt' }).getByLabel('visit TikTok profile')).toBeVisible();
    await expect(page.locator('nav').filter({ hasText: 'HomeÜber michKontakt' }).getByLabel('visit Facebook profile')).toBeVisible();
    await expect(page.locator('nav').filter({ hasText: 'HomeÜber michKontakt' }).getByLabel('visit Twitter profile')).toBeVisible();
    await expect(page.locator('nav').filter({ hasText: 'HomeÜber michKontakt' }).getByLabel('visit Instagram Heatwave')).toBeVisible();
  })

  test("should have nav links", async ({ page }) => {
    await expect(page.getByText('HomeÜber michKontakt')).toBeVisible();
    await expect(page.getByLabel('gehe zur Home Seite')).toBeVisible();
    await expect(page.getByText('Über mich', { exact: true })).toBeVisible();
    await expect(page.locator('ul').filter({ hasText: 'HomeÜber michKontakt' }).getByLabel('gehe zur Kontakt Seite')).toBeVisible();
  })

  // swiper image
  // booking button
  // insta images
  // spotify
  // soundcloud

  // footer
  //cookiebanner

})

