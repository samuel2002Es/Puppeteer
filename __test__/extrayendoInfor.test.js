const puppeteer = require('puppeteer');

describe('Estraer el titulo de la pagina y la url', () => {
    beforeEach(() => {
        jest.setTimeout(60000);
      });
    let browser;
        beforeAll( async () => {
            browser = await puppeteer.launch({ headless: false, defaultViewport: null })
        });
    it('Mostrar todos los diferentes tipos de espera', async () => {
        const page = await browser.newPage()
        await page.goto('https://platzi.com',{waitUntil: 'networkidle0'})
        const titulo = await page.title()
        const url = await page.url()

        console.log('titulo: ', titulo,' url: ', url);
        await browser.close()
	}, 350000);
    it('Extraer la informacion de un elemento', async () => {
        const page = await browser.newPage()
        await page.goto('https://platzi.com',{waitUntil: 'networkidle0'})
        await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(7) > a')
        // document.querySelector es el $eval, 
        const nombre = await page.$eval('#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(7) > a',(element)=>element.textContent)
        console.log(nombre);
        //con xpath retorna un arrego
        const [nombre2] = await page.$x('//*[@id="Header-v2"]/nav[2]/div[3]/div/div/ul/li[7]/a')
        const propiedad = await nombre2.getProperty('textContent')
        const texto = await propiedad.jsonValue()
        console.log(texto);

        //segunda forma con xpath
        const texto2 = await page.evaluate((element)=> element.textContent, nombre2)
        console.log(texto2);

        // tercera forma con xpath
        const button3 = await page.waitForXPath('//*[@id="Header-v2"]/nav[2]/div[3]/div/div/ul/li[7]/a')
        const texto3 = await button3.evaluate((element)=> element.textContent)
        console.log(texto3);
        await browser.close()
	}, 350000);
    it('contar los elementos de una pagina', async () => {
        const page = await browser.newPage()
        await page.goto('https://platzi.com',{waitUntil: 'networkidle0'})
        // cuando le damos 2 $ es un query selector all, es decir nos va a retornar todos los elementos y no solo uno, retorna un arreglo
        const images = await page.$$eval('img',(imagenes) => imagenes.length)
        console.log(images);
    })
    afterAll(async () => {
        await browser.close()
    },50000);
});