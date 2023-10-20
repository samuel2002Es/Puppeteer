const puppeteer = require('puppeteer');

describe('Interactuando con elementos', () => {
    let browser;
        beforeAll( async () => {
            browser = await puppeteer.launch({ headless: false, defaultViewport: null })
        });
    it('Mostrar todos los diferentes tipos de espera', async () => {
        const page = await browser.newPage()
        // await page.goto('http://platzi.com',{waitUntil: 'networkidle2'})

        //espera explicita
        //await new Promise(r => setTimeout(r, 3000))

        // Espera por un selector css
        // await page.waitForSelector('h1')

        //Espera por un xpath
        // await page.waitForXPath('//h1')

        await page.goto('https://demoqa.com/modal-dialogs',{waitUntil: 'networkidle0'})
        // Esto nos ayuda a verificar que no visible
        // await page.waitForSelector('body > div.fade.modal.show > div > div', {hidden: true})
        //dar click con xpath
        const button = await page.waitForXPath('//*[@id="showSmallModal"]',{visible: true})
        await button.click()

        // Espera por funcion
        await page.waitForFunction(() => document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal')

        // Ejemplo para observar el viewport
        const observaResize = page.waitForFunction('window.innerWidth < 100')
        await page.setViewport({width:50,height:50})
        // await observaResize
        await page.click('#closeSmallModal')
        // await page.waitForFunction(() => !document.querySelector('#example-modal-sizes-title-sm'))

        await browser.close()
	}, 350000);
    afterAll(async () => {
        await browser.close()
    });
});