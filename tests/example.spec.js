import { test, expect } from '@playwright/test';

const BASE_URL = 'https://relatos-de-papel-rouge.vercel.app/books';

test.describe('Pruebas de la página Relatos de Papel', () => {

  test('01 - La página carga correctamente', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/React App/i);
    await expect(page.locator('th')).toHaveText('Catálogo de Libros');
  });

  test('02 - Buscar un libro por título', async ({ page }) => {
    await page.goto(BASE_URL);

    const searchBox = page.locator('input[placeholder="Busca tu libro por título..."]');
    await searchBox.fill('1984');
    await expect(page.locator('text=1984')).toBeVisible();
    await expect(page.locator('text=George Orwell')).toBeVisible();
  });

  test('03 - Verificar funcionalidad del botón "+ Info"', async ({ page }) => {
    await page.goto(BASE_URL);
    
    const infoButton = page.locator('text="+ Info"').first();
    await infoButton.click();

    await expect(page).toHaveURL(/book/); // Ajusta esto según el comportamiento esperado
  });

  test('04 - Agregar un libro al carrito', async ({ page }) => {
    await page.goto(BASE_URL);

    const carritoAntes = await page.locator('text=Carrito  0').count();
    expect(carritoAntes).toBe(1);

    const comprarButton = page.locator('text=Comprar').first();
    await comprarButton.click();

    await expect(page.locator('text=Carrito  1')).toBeVisible();
  });

});


