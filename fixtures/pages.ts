import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

type PagesFixtures = {
  mainPage: MainPage;
};

export const test = base.extend<PagesFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await use(mainPage);
  },
});

export { expect } from '@playwright/test';
