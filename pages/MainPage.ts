import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  readonly heading: Locator;
  readonly eventsLink: Locator;

  constructor(page: Page) {
    super(page);

    this.heading = page.getByRole('heading', { name: /Афиша/i });

    this.eventsLink = page.getByRole('link', { name: 'События от МТС Live' });
  }

  async open() {
    await this.page.goto('https://live.mts.ru/', {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
  }

  async expectOpened() {
    await expect(this.page).toHaveURL(/live\.mts\.ru/);
    await expect(this.heading).toBeVisible();
  }

  async goToEvents() {
    await this.eventsLink.click();
  }
}
