#Curso Fundamentos de React (Carlos Azaustre)

http://cursos.carlosazaustre.es/courses/enrolled/react-js

**Herramientas de desarrollo**
* Babel
* webpack: http://webpack.github.io/
 * Es un module bundler

##Babel
* https://babeljs.io/repl/
* Para que el ES6 sea entendido por todos los navegadores.
* También sirve para React por el preset que tiene (sin necesidad de importar el transformador de JSX).
* Se instala como dependencias con el npm.
* Cada módulo de ES2015 se instala con un plugin independiente. 
* Si quieres usar todo el estándar, existen unos paquetes especiales (presets) que incluyen todos los plugins de, por ejemplo, ES2015.
* También existe ES2016 y ES2017.
* Si quieres todo (ES2015, ES2016, ES2017), existe el preset "latest" (así tienes todo lo nuevo).

##Pasos
1. `npm init`
  * Genera un `package.json`
2. Instalamos las dependencias
  * Si son propias del proyecto (e.g. React), se instalan en el fichero dependencies con el flag --e
  * Si son solo para desarrollo (e.g. webpack, Babel), se instalan con flag `--save-dev`, y se meterán en dev-dependencies:
    * `npm install --save-dev webpack webpack-dev-server`
        * `webpack-dev-server` para arrancar un servidor en local y poder probar más fácilmente
    * `npm install --save-dev babel-cli babel-preset-latest babel-preset-react`
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
    * extensiones que webpack debe vigilar para aplicando transformadores
    * fichero de entrada (index.jsx) y qué fichero de salida generar (y dónde)
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