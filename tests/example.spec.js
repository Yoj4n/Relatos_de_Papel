import { test, expect } from '@playwright/test';

const BASE_URL = 'https://relatos-de-papel-rouge.vercel.app/books';

test.describe('Pruebas de la página Relatos de Papel', () => {

  test('01 - La página carga correctamente', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/RELATOS DE PAPEL/i);
    await expect(page.locator('h2')).toHaveText('Catálogo de Libros');
  });

  test('02 - Buscar un libro por título', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('input[name="search"]', 'Libro de prueba');
    await page.press('input[name="search"]', 'Enter');
    await expect(page.locator('.book-title')).toContainText('Libro de prueba');
  });

  test('03 - Verificar funcionalidad del botón "+ Info"', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForSelector('button.more-info', { state: 'visible' });
    await page.click('button.more-info');
    await expect(page.locator('.book-details')).toBeVisible();
  });

  test('04 - Agregar un libro al carrito', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForSelector('button.add-to-cart', { state: 'visible' });
    await page.click('button.add-to-cart');
    await expect(page.locator('.cart-items')).toContainText('1');
  });
});

