# Dataverse

## Índice
* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Consideraciones técnicas](#3-consideraciones-técnicas)
* [4. Criterios de aceptación mínimos del proyecto](#4-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)

***

* Tiene un `README.md` con la siguente:
  - [ ] _Definición del producto_ clara e informativa
  - [ ] Historias de usuario
  - [ ] Un _Diseño de la Interfaz de Usuaria_ (prototipo de alta fidelidad)
  - [ ] El listado de problemas que detectaste a través de tests
    de usabilidad en el `README.md`

## 1. Resumen del proyecto

En Dataverse **construí en 5 semanas y en equipo una _página web_ para visualizar un
_conjunto (set) de datos_** generados con prompting, sobre obras arquitectónicas del mundo.
Esta página web fue pensada según las necesidades de la usuaria meta y le permite **visualizar la data,
filtrarla, ordenarla y calcular alguna estadística**.

Además, en este proyecto utilicé herramientas de inteligencia artificial, específicamente ChatGPT,
para generar el set de datos en un archivo javascript, con el propósito de aprovechar el empleo 
de herramientas impulsadas por la inteligencia artificial, así como técnicas de prompting.

## 2. Funcionalidades

A continuación, defino detalladamente las funcionalidades que tiene el proyecto Dataverse:

* La aplicación permite a la usuaria ver los items de la data en una visualización tipo tarjetas.

* Las tarjetas resaltan los valores de las propiedades de la data que
  le interesaría a la usuaria ver, en este caso, escogí el nombre de la obra, la ubicación y la cantidad 
  de personas al año que la visitan.

* La interfaz estructura semánticamente la data usando el estándar microdatos.

* La aplicación calcula y visualiza el promedio de personas que visitan las obras consideradas maravillas del mundo.

* La aplicación permite a la usuaria filtrar la data según la cantidad de visitantes anuales.

* La aplicación permite a la usuaria ordenar de forma alfabética la data, tanto de manera ascendente como descendente. Además, esta funcionalidad trabaja sobre la data filtrada, es decir, al ordenar la data mantiene el filtro escogido por la usuaria.

* La aplicación permite a la usuaria reiniciar la aplicación, a través de un botón que limpia la opción de filtrado y la de ordenado.

* Las operaciones de filtrar, ordenar, limpiar no recargan la página, si no que agregan el contenido en una manera
  dinámica vía javascript.

* La aplicación es _responsive_, es decir, visualiza la data sin problemas desde distintos 
tamaños de pantallas: móviles, tablets y desktops.

## 3. Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript (ES6), HTML y CSS. 
En este proyecto NO utilicé librerías o frameworks, solo vanilla JavaScript. Para este proyecto, se implementó la separación de responsabilidades en el código para tener una estructura mucho más clara. 
A continuación, se describen brevemente los archivos empleados:

### `src/index.html`

En este archivo se incluye la página que se mostrará a la usuaria. También indica
los scripts usados y unir todo lo que hice.

### `src/main.js`

Este archivo incluye mi código relacionado con mostrar los datos en la pantalla. 
Con esto me refiero básicamente a la interacción con el DOM: operaciones 
como creación de nodos, registro de manejadores de eventos (_event listeners_ o _event handlers_).

En este archivo se empleó una serie de _imports_ para _cargar_
las diferentes fuentes de datos.

### `src/dataFunctions.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos. Por ello, este archivo contiene toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (las funciones). A continuación, explico de qué tratan:

* `filteredData(data, filterBy, value)`: esta función recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `filterBy`, nos dice con respecto a cuál de los campos de
  la data se quiere filtrar.
  El tercer parámetro, `value`, indica el valor de campo que queremos filtrar.

* `sortByName(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular nos permite hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo con la data
  proporcionada y usa el método reduce.

Todas estas funciones desarrolladas son _puras_ e independientes del DOM. Estas funciones 
son usadas desde el archivo `src/main.js` al cargar la página y cada vez que la usuaria interactúe (click, filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos generados con ayuda de la inteligencia artificial y con los que trabaja la aplicación.

### `test/dataFunctions.spec.js`

En este archivo hice pruebas unitarias de las funciones implementadas en el archivo `dataFunctions.js`: `filteredData`, `sortByName` 
y `computeStats`, que utilian la data "mock" del archivo `data.js` para correr y entender sí funcionan adecuadamente o no.

### `test/data.js`

En este archivo construí y exporté data "mock" para usar en los tests, la cual consiste en
un arreglo de 6 elementos. Para testear esta data, exporté un variable llamada `data`.

### `src/view.js`

Este archivo tiene la función para renderizar los elementos dinámicamente, llamada renderItems(data),
la cual recibe el arreglo de data para renderizar los elementos de cada item y devuelve un elemento DOM.

## 4. Criterios de aceptación mínimos del proyecto

### Criterios de código

La aplicación web fue construida siguiendo una serie de requisitos que debía cumplir, 
llamados objetivos de aprendizaje, en el que evaluaban si mi código cumplía con ciertos
criterios, para los cuales corríamos una serie de pruebas, tanto unitarias como e2e.

#### HTML

* **Uso de HTML semántico**

  - [ ] Tiene un `<header>` con `<h1>`
  - [ ] Tiene un `<footer>`
  - [ ] Tiene un `<main>` con `<h2>`
  - [ ] Todas las etiquetas de controles (inputs, selects, radio, etc) tienen `<label>`
  - [ ] `<ul>` esta usado para dibujar la data
  - [ ] Los hijos de `<li>` usan attributos de microdata `itemscope` e `itemprop`

#### CSS

* **Uso de selectores de CSS**

  - [ ] Uso de selector class para los items <li>
  - [ ] Uso de flexbox en sentido `row` y `column`
  - [ ] Uso de flexbox para el elemento que contiene los items
  - [ ] Uso de flexbox para el elemento que contiene los UI inputs

#### Web APIs

* **Uso de selectores del DOM**

  - [ ] La aplicación usa `querySelector` para buscar los elementos del DOM
  
* **Manejo de eventos del DOM (listeners, propagación, delegación)**

  - [ ] `addEventListener` con callback que tiene parámetro de `event`, lo que permite el uso del objeto `event`.
    con `event.target` o `event.currentTarget`
  - [ ] La aplicación registra Event Listeners para escuchar `click` y `change`, dependiendo del evento que se quiere escuchar

* **Manipulación dinámica del DOM**

  - [ ] La aplicación actualiza el atributo `innerHTML`.
  - [ ] La aplicación usa `createElement` y `appendChild` para crear elementos

#### JavaScript

* **Variables (declaración, asignación, ámbito)**

  - [ ] La aplicación declara variables con `let` y `const`.
    en manera adecuada

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - [ ] La aplicación usa el statement `if..else`.

* **Uso de bucles/ciclos (while, for, for..of)**

  - [ ] La aplicación usa el statement `for` para iterar

* **Funciones (params, args, return)**

  En el archivo `dataFunctions.js` se definen las siguientes funciones:
  - [ ] la función `sortByName` que tiene 3 parámetros (`data`, `sortBy`, `sortOrder`)
    y devuelve el arreglo ordenado.
  - [ ] la función `filteredData` que tiene 3 parámetros (`data`, `filterBy`, `value`)
    y devuelve el arreglo filtrado.
  - [ ] la función `computeStats` que tiene al menos un parámetro (`data`)
    y devuelve un valor computado.

* **Arrays (arreglos)**

  - [ ] Uso de Arreglos.
  - [ ] Uso de Array.prototype.sort()
  - [ ] Uso de Array.prototype.map()
  - [ ] Uso de Array.prototype.filter()
  - [ ] Uso de Array.prototype.reduce()

* **Objetos**

  - [ ] Uso de notación de punto para acceder propiedades
  - [ ] Uso de notación de brackets para acceder propiedades

* **Módulos de ECMAScript (ES Modules)**

  - [ ] La aplicación usa `import` y `export` para importar y exportar valores desde un modulo JavaScript.

### Criterios del proyecto

#### Definición del producto

Primero, para crear una solución al problema de mi usuaria, respondí las siguientes preguntas:

* ¿Quiénes son las principales usuarias del producto?
* ¿Cuáles son los objetivos de estas usuarias en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?

De esta investigación, pude extraer o construir mi público meta final, el cual lo defino así:
* Personas adultas, profesionales o estudiantes, que les interese el arte o conocer sobre un posible destino.

Además, sobre el diseño, consideré lo siguiente:
* Paleta de color: escogí una paleta compuesta por 5 colores, cuyos tonos fueran acordes a la temática.
*

#### Historias de usuario

Luego, escribí a partir de mi investigación previa todas las Historias de Usuaria de mi proyecto.

Una vez que entiendas las necesidades de tus usuarias, escribe las historias
de usuaria que representen todo lo que la usuaria necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarias.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

Usa tus historias de usuario para planificar tus sprints dividiendo
cada historia en tareas.

En la medida de lo posible, termina una Historia de Usuario antes de pasar
a la siguiente (cumpliendo con la Definición de Terminado y los Criterios de Aceptación).

#### Diseño de la Interfaz de Usuaria

##### Prototipo de alta fidelidad

Cree un boceto de mi solución de interfaz como base, tal como se ve en la siguiente imagen.

Finalmente, diseñé mi Interfaz de Usuaria con la herramienta de diseño visual [Figma].

El [diseño creado](https://www.figma.com/file/P1nBYUIzm7Pu18e9p1fy3P/Architopia-(Community)?type=design&node-id=303%3A2&mode=design&t=onNaQz2TcPfIarqJ-1) representa el _ideal_ de mi solución y siguió los fundamentos de _visual design_ . 

También, pedí feedback del prototipo a mis compañeras y coaches para mejorar el diseño. Parte del feedback recibido fue... e implementamos de ello...

#### Generar los datos

La temática escogida fue obras arquitectónicas del mundo y el archivo generado exportó un arreglo con 24 objetos. 

#### Prompt utilizado

A continuación, se muestra en imágenes el prompt generado con ayuda de inteligencia artificial:

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarias,
y con base en los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

#### Pruebas unitarias

Diseñé y escribí las pruebas unitarias para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas. Para ello, utilicé
el framework [Jest] para ejecutar las pruebas unitarias.

## 5. Objetivos de aprendizaje


Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**

- [ ] **Modelo de caja (box model): border, margen, padding**


- [ ] **Uso de flexbox en CSS**

### Web APIs

- [ ] **Uso de selectores del DOM**

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [ ] **Manipulación dinámica del DOM**

### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

- [ ] **Objetos (key, value)**

- [ ] **Variables (declaración, asignación, ámbito)**

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

- [ ] **Funciones (params, args, return)**

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Módulos de ECMAScript (ES Modules)**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

### AI Prompting

- [ ] **Dando Instrucciones**

- [ ] **Few shot prompting**

#### Herramientas utilizadas

* [Git]
* [GitHub]
* [GitHub Pages]
* [Node.js]
* [Jest]