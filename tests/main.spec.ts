import { test, expect } from '../fixtures/pages';

test('Главная страница открывается и есть переход в события', async ({ mainPage, page }) => {
  await mainPage.expectOpened();

  await mainPage.expectLoginButtonVisible();
  await mainPage.expectLocationButtonVisible();

  await mainPage.goToEvents();

  await expect(page).toHaveURL(/collections\/events_live/);
});
