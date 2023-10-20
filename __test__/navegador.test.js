const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {
	it('Debe abrir y cerrar el navegador', async () => {
		// Abrir el navegador
		const browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null
		});
		const page = await browser.newPage();
		// ir a la pagina, esperar y cerrar el navegador
		await page.goto('https://www.google.com');
		await page.waitForTimeout(1000);
		await page.waitForSelector('img')
		// Recargar la pagina
		await page.reload();

		//navegar a otro sitio
		await page.goto('http://www.platzi.com')
		await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Logo > div > a > div > figure > img')

		// Navegar hacia atras
		await page.goBack();
		await page.waitForTimeout(1000);
		await page.waitForSelector('img')

		// Navegar hacia adelante
		await page.goForward();
        await page.waitForSelector('img')

		// Abrir otra pagina
		const page2 = await browser.newPage()
		await page2.goto('http://www.github.com')

		await browser.close();
	}, 50000);
});