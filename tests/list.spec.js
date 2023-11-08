// @ts-check
const { test, expect } = require('@playwright/test');

test('Тайтл', async ({ page }) => {
  await page.goto('https://forma.ru/market/list');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Купить квартиру в Москве от застройщика, продажа новостроек от FORMA/);
});

test('Состав блока фильтров', async ({ page }) => {
  await page.goto('https://forma.ru/market/list');

  const divFormContainer = page.locator('CatalogForm_container__FYvTH')
  await page.locator('CatalogPageComponent_form__iiG2G');
  await divFormContainer.getByText('Проект')
  await divFormContainer.getByText('Ключи до')
  await divFormContainer.getByText('Спальни')
  await divFormContainer.getByText('Стоимость, ₽')
  await divFormContainer.getByText('Секция/ Корпус')
  await divFormContainer.getByText('Площадь, м²')
  await divFormContainer.getByText('Этаж')
  await divFormContainer.getByText('Отделка')
  await divFormContainer.getByText('Особенности')
  await divFormContainer.getByLabel('promo')

});

test('Заголовок', async ({ page }) => {
  await page.goto('https://forma.ru/market/list');

  await expect(page.getByRole('heading', { name: 'Поиск квартиры' })).toBeVisible();
});
test('Чек-бокс Показать квартиры', async ({ page }) => {
  await page.goto('https://forma.ru/market/list');

  const promo = page.getByLabel('Показывать только квартиры по акции');
  // Check and then immediately uncheck.
  await promo.check();
  await expect(promo).toBeChecked();
});
