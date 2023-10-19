const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {
	it('Debe abrir y cerrar el navegador', async () => {
		// Abrir el navegador
		const browser = await puppeteer.launch({
			headless: false,
		});
		const page = await browser.newPage();
		// ir a la pagina, esperar y cerrar el navegador
		await page.goto('https://www.google.com');
		await page.waitForTimeout(5000);
		await browser.close();
	}, 10000);
});