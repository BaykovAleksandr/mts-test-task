import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  readonly loginButton: Locator;
  readonly locationButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginButton = page.getByRole('button', { name: 'Войти' });
    this.locationButton = page.getByTitle('Выбор региона');
  }

  async expectLoginButtonVisible() {
    await expect(this.loginButton).toBeVisible();
  }

  async expectLocationButtonVisible() {
    await expect(this.locationButton).toBeVisible();
  }
}
