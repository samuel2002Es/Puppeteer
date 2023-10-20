const puppeteer = require('puppeteer');

describe('Interactuando con elementos', () => {
	it('Debe abrir y dar clicks en una pagina', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
        const page = await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
        page.on('dialog',async (dialog) => {
            await dialog.accept()
        })
        // Click derecho
        await page.click('#authentication > span',{button: 'right',delay:500})
        await page.waitForTimeout(3000)
        // Doble click
        await page.click('#authentication > button',{clickCount:2,delay:500})
        await page.waitForTimeout(3000)

        await browser.close()
	}, 50000);
    it('ir a una nueva pagina', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name','Samuel',{delay:100})
        await page.click('#remote-testing')
        await page.click('#tried-test-cafe')
        await page.type('#comments','Esto es un comentario')
        await page.select('#preferred-interface', "Both")
        await page.click('#submit-button')
        await browser.close()
	}, 50000);
});