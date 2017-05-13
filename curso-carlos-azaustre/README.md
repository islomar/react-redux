# Curso Fundamentos de React (Carlos Azaustre)
http://cursos.carlosazaustre.es/courses/enrolled/react-js

Duración aproximada: 6 horas

## Versiones
* npm: v3.10.8
* node: v6.9.1

## Dockerization
* https://medium.com/@tribou/react-and-flux-a-docker-development-workflow-469957f3bbf0
* https://github.com/jllado/react-minimal-setup


## General
* React es únicamente una librería, no un framework.
* Se encarga del renderizado de la vista en el navegador.
* Desarrollada por Facebook, al igual que Webpack.
* Aplicaciones isomórficas: La primera carga se realiza en el servidor, el resto en la parte de cliente (SPA).
* React Native: no es una aplicación híbrida como Ionic o Cordova, sino que te genera una aplicación nativa de verdad.
* Babel: transpilador

## ¿Cómo funciona React.js?
Debido a su naturaleza funcional. React no necesita de listeners, observers o double-way data-binding para renderizar cambios. Los componentes de React son capaces de autogestionarse y saber cuando volver a renderizarse debido a cambios de sus estados internos o por paso de propiedades.
El acceso al DOM (Document Object Model) es una de las partes que más ralentizan una aplicación web. Es muy costoso acceder al DOM y realizar cambios, ya que tiene que comprobar todos los nodos hasta encontrar cual y que ha cambiado.
Para ello React tiene una implementación que denomina **Virtual DOM**, que es una representación del DOM original en memoria, pero únicamente con las propiedades necesarias que permiten identificar cambios y todo su sistema de eventos sintéticos.
Cuando llamamos a la función setState en la que añadimos un nuevo estado al Componente, React marca ese Component como dirty. Al finalizar el flujo de eventos que producen ese cambio de estado, React mira que componentes han quedado marcados como dirty y los re-renderiza.
Para identificar los cambios y decidir si renderizar el componente de nuevo o no, utiliza un algoritmo de diffing que consiste en que a cada cambio se genere un nuevo árbol virtual DOM, lo compara con el anterior, decide cuales son los cambios mínimos a implementar, los encola y los termina de procesar.
* React's diff algorithm: https://calendar.perfplanet.com/2013/diff/

## Node
* Instalasr: https://www.digitalocean.com/community/tutorials/como-instalar-node-js-en-ubuntu-16-04-es
* https://nodejs.org/es/download/package-manager/

## NPM
* gestor de paquetes/dependencias de Node
* Todas las dependencias se instalarán en "node_modules"
* **require:** palabra reservada de Node >> usaremos import/export, palabras reservadas de ES6


## Babel
* https://babeljs.io/repl/
* Para que el ES6 sea entendido por todos los navegadores.
* ES6 = ES2015 (ECMAScript 6th Edition)
* También sirve para React por el preset que tiene (sin necesidad de importar el transformador de JSX).
* Se instala como dependencias con el npm.
* Cada módulo de ES2015 se instala con un plugin independiente.
* Si quieres usar todo el estándar, existen unos paquetes especiales (**presets**) que incluyen todos los plugins de, por ejemplo, ES2015.
* También existe ES2016 y ES2017.
* Si quieres todo (ES2015, ES2016, ES2017), existe el preset **"latest"** (así tienes todo lo nuevo).
* También existe un preset para react


## webpack
* http://webpack.github.io/
* Es un module bundler
1. `npm init`
  * Genera un `package.json`
2. Instalamos las dependencias
  * Si son propias del proyecto (e.g. React), se instalan en el fichero dependencies con el flag --e
  * Si son solo para desarrollo (e.g. webpack, Babel), se instalan con flag `--save-dev`, y se meterán en dev-dependencies:
    * `npm install --save-dev webpack webpack-dev-server`
        * `webpack-dev-server` para arrancar un servidor en local y poder probar más fácilmente
    * `npm install --save-dev babel-cli babel-preset-latest babel-preset-react babel-loader`
      * `babel-cli` incluye el core de Babel
      * `babel-loader` es el cargador que usa webpack en su fichero de configuración y permite usar Babel en webpack
    * `npm install --save-dev css-loader style-loader`
        *  para usar destinos CSS, webpack proporciona un cargador para poder usar CSS modules
        (tener un CSS específico para cada componente y poder crear un CSS final sin preocuparte de los nombres de las clases)
    * `npm install --save-dev html-webpack-plugin extract-text-webpack-plugin`
        * para hacer una copia del fichero HTML que vamos a utilizar, de manera que webpack creará la versión para Producción en otra carpeta
        * para poder utilizar los CSS modules, importará los estilos de los componentes y creará un CSS para ellos
3. El paso anterior actualiza el package.json e instala todas las dependencias bajo node_modules (carpeta a ignorar por git)
4. Creamos el fichero **webpack.config.js**
    * extensiones que webpack debe vigilar para aplicar transformadores
    * fichero de entrada (index.jsx) y qué fichero de salida generar (y dónde)
    * atributo "publicPath": para el caso en que se use un servidor de Desarrollo.
    * regex para ver a qué ficheros aplicar transformadores y a cuáles no: los aplica a los ficheros de nuestra aplicación, no a las dependencias (node_modules)
        * El loader `babel` hace referencia al `babel-loader`
    * Todos los ficheros acabados con la extensión .css, deben usar el loader style-loader y css-loader (se concatenan con la exclamación).
    * Con template string, `cssModules`, indicamos cómo generar el nombre del fichero CSS final a generar (usamos el hash al final por si dos módulos se llamaran igual)
    * Declaramos una variable cssModules: nombre que van a tener las clases CSS una vez se genere el bundle
    * devServer (propiedad inline: true para webpack), relacionado con el webpack-dev-server
    * declaramos los plugins
5. Creamos el fichero **.babelrc**
    * Se configura la lista de presets que queremos usar (latest y react).
    * Cuando en el webpack.config.js se carga el loader de babel, usará este fichero para ver qué cargar.
6. Completamos el fichero json para crear varios comandos: el de bundle de la aplicación (build) y el que sirve la aplicación (serve)
7. Creamos un src/assets/index.html
8. Run `npm start`: indicará que no encuentra el fichero .jsx, y acabará con un **Bundle is now VALID**
    * Habrá generado una carpeta "build" con un appljs y un index.html
9. Go to `http://localhost:8080/` and check that it shows the Hello World!!
10. Cuando creemos el fichero .jsx, todo


## Introducción a ES6
* Ver es6-basic-example.js
* JS tiene una manera nativa de importar y exportar módulos
    * import <> from '<>'
    * export default <name>
* Aparecen clases
* Arrow functions
* Template strings

## Desarrollo de la aplicación
* **package.json**: http://cursos.carlosazaustre.es/courses/117631/lectures/2103210
* Usamos CSS Modules
* Los Components puede tener propiedades y estado.
    * Cuando el estado cambie, fuerza al Comp a llamar al render()
* Librería moment para tiempos: `npm install moment --save`
* Para buscar URLs de CDN de una librería: https://cdnjs.com/
* Para tener un estilo común en todos los navegadores: `npm install normalize-css --save`
    * Mejora espaciados y tipografía
    * https://necolas.github.io/normalize.css/
* `npm install --save uuid`: para asignar ids únicos a los mensajes
* Para modificar el estado de un padre desde un hijo, el hijo llama a una función que esté en el padre.
* ES6: Si el atributo a modificar se llama igual que la key, puedes poner solo uno.
* **Eventos sintéticos**:
    * https://facebook.github.io/react/docs/events.html
    * No aparecen renderizados en el HTML como un evento inline, sino que se delega a través del Virtual DOM.
    * React, con JSX, tiene una serie de eventos sintéticos que permite abstraerte de los eventos del navegador, de manera que no haya que usar ningún addEventListener u otras librerías como jQuery para tratarlos.

## React-Router
* Todas las vistas están en la aplicación cliente
* React no tiene esta funcionalidad, pero sí `react-router`
* Instalar `npm install --save react-router@v4.0.0-alpha.4`
* Aparece `Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead`
    * http://stackoverflow.com/questions/43303995/react-router-npm-package-giving-me-warning-in-console-proptypes-deprecated
* Spread operator: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator
    * Para pasar todo un objeto, e.g. `{... this.state.user}`


## Buenas prácticas en React
* Componentes Stateful y Stateless
    * Stateless: componentes representacionales, solo se encargan del aspecto visual de la aplicación
        * Header
    * Stateful: componentes contenedor; aparte de estado, tienen funciones. etc.
    * Solo extender de Component si eres Stateful. Así, los representacionales son más reutilizables, incluso en otras aplicaciones.
* Uso de PropTypes:
    * Para tener tipos: Typescript o Flow.
    * Una opción más sencilla: PropTypes


## Integración con Firebase
* Cuenta en google.firebase.com
* Crear proyecto
* `npm install --save firebase`
* Firebase -> Authentication -> Signin providers -> GitHub -> Copiamos la callback URL y la damos de alta en GitHub (OAuth providers) -> el clientId/clientSecret de GitHub lo copiamos en Firebase.
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

**Bookmark:**
* Añadiendo Autenticación Social


## Pendiente de investigar:
* Diferencia const vs let.
* Ciclo de vida de React

## Feedback para Carlos
* Meter las dependencias/configuraciones justo cuando se vayan a utilizar, no antes. Así se gana consciencia de qué es necesario para qué (e.g. cssModules)
* Tener el código con pequeños commits en el GitHub.

## Para compartir en Alea
* Librería moment
* Librería normalize-css:
    * Normalize.css is a small CSS file that provides better cross-browser consistency in the default styling of HTML elements. It’s a modern, HTML5-ready, alternative to the traditional CSS reset.
* Flexbox
* webpack-dev-server
* Plugin Chrome: React Developer Tools
* Para buscar URLs de CDN de una librería: https://cdnjs.com/
* CSS Modules: A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.
* Convención onXxxxx para funciones que reaccionan a eventos onClick() o onXxx().
* Covnenciones de nombre handleXxxx()"
* Todo inmutable, tipo `let user = Object.assign({}, this.state.user)`
* ES6: si key==value, dejar solo el key
* El estado de un componente solo debe ser modificado por el propio componente
* Componentes Stateful vs Stateless: No heredar de Component si no tiene estado
* Uso de PropTypes (tipado)


## Problemas
`React.createElement: type is invalid -- expected a string or a class/function but got: undefined`
* Comentado aquí: http://cursos.carlosazaustre.es/courses/117631/lectures/1738311
* https://github.com/ReactTraining/react-router/issues/4477
* https://github.com/AnomalyInnovations/serverless-stack-com/issues/33
* Referencia: https://github.com/AnomalyInnovations/serverless-stack-demo-client/blob/handle-routes-with-react-router/package.json