# Puppeteer
[![documentacion]](https://static.platzi.com/media/public/uploads/2-slides_23b1cb97-bddc-42d3-aeb1-f9134a9b9fb9.pdf)

**DOM:** Document Object Model, es una interfaz/modelo de documento. se representan como un arbol de nodos. LLamamos DOM a la anidacion de etiquetas que utilizamos en el documento HTML
**CSSOM:** Llamamos CSSOM al arbol de etiquetas que utilizamos en el documeto CSS

# Atributos y selectores
Cuando el navegador analiza las etiquetas y apartir de estos atributos ESTANDAR (id,class,style,title) crea propiedades del DOM, en cambio hay atibutos no estandar y estos no crean propiedades
selectores: CSS selector: tiene el atrivuto universal (*) con este le decimos que todo lo que va a tener el dom, tipo: input este input selecciona las etiquetas que sean input, clase: .classname las mas comunes, atributo: [attr] [attr=value] [attr|=value] etc, grouping selectors: div, span, combinadores: compinador de hermanos adyacentes:h1+p combinador de hijo ul>li, Pseudo clases: a:link, Pseudo elementos: p::first-line,

# Xpath selector
![App Screenshot](Xpath%20selector.png)
![App Screenshot](xpath%20funciones.png)
![App Screenshot](xpath%20predicados.png)

# Puppeter
Es una libreria de node que nos proporciona una API de alto nivel para controlar el navegador. Es una herramienta de automatizacion que puede ser usada para pruebas automatizadas

Puppeter vs selenium
**Ventajas**
- Opfrecemas control sobre el navegador
- Elimina la dependencia de un driver externo
- Comparacion de imagenes nativas
- Modo Headless por defecto y mucho mas rapido
- Permite web scraping
- Mide los tiempos de renderizado y carga medianta la hrramienta de analisis de rendimiento de Chrome.

**Contras**
- Solo ofrece soporte con Chrome y con Firefox experimental.
- Solo soporta Node JS
- Solo soporta automatizacion Web.

# Opcioes de lanzamiento
**Slow motion:** hace la ejecucion del test mas lento `slowMo:1000`

**headless:** setear el uso de la interfaz del browser `headless: true/false`

**devtools** abre el inspeccionador del browser `devtools: true/false`

**defaultViewport** tamaño 
```bash
defaultViewport:{
    width:2100,
    height: 1800
}
```
```bash
args: ['--window-size=1920,1080']
```