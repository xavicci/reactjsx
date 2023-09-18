//**\_**VALORES**\_**
//40 numero

//"texto" Texto o string

//true boleano
//false boleano

//null valores vacios
//undefined valores vacios

//[1,2,3,4]valores primitivos dentro de un array "Esto es tipo objeto"

//{nombre: "daniel"} Valor tipo objeto

var nombre = "Oscar";
// declarar
var edad;
// inicializar
edad = 30;
var elementos = ["Computadora, Celular"]
var persona = {
nombre: "Daniel",
edad: 30
}
persona

//\_**\_FUNCIONES\_\_\_**

// Funciones Declararivas
function miFuncion(c,d) {
return c + d;
}
miFuncion ();

// Funciones de Expresión
var mifuncion = function (a,b){
return a + b;
}
mifuncion ();

//**\_**HOISTING**\_**
console.log(miNombre)
var miNombre = "Daniel";
hey ();
function hey() {
console.log("hola "miNombre)
}

//**\_\_**COHERCION**\_\_\_**
//Cohercion inplicita
var a = 4 + "7";
a
// a es un string
var b = 3 \* "4";
b
// b es tipo numero7

//cohercion explicita
d = 34;
var e = String(d);
// d es un numero y e es un string con el calor de d
f= "45";
var g = Number(f);
// f es un valor String y g es tiene el valor de f pero es un tipo Número

//**\_\_\_**TRUTHY & FALSY**\_\_**
// FALSE\_\_\_FALSE
Boolean (0);
//false
Boolean (null);
//false
Boolean (NaN);
//false
Boolean (undefined);
//false
Boolean (false);
//false
Boolean ("");
//false

// TRUE \_\_\_\_TRUE
Boolean (" ");
//true
Boolean ("a");
//true
Boolean (1);
//true
Boolean ([]);
//true
Boolean ({});
//true
Boolean (function());
//true
Boolean (true);
//true

//**\_\_\_**OPERADORES****\_\_****
// Operadores Matematicos
3 + 2
//5
25 - 10
//15
10 \* 3
//30
15 / 3
//5
"Daniel" + "Valdivieso"
//Daniel Valdivieso

! //negación
!false
//true
= //asignacion var a = 1
== //comparación 3 == "3" ?
=== // 3 === "3" falso porque uno es string y otro es numero por lo tanto no son exactamente iguales

5 < 3 //false
5 > 3 //True
5 <= 6 //true
5 >= 6 //false
a && b // si a es T y b es T entonces es True, si alguna es falsa entonces el condicional es falso
!= //diferente
a || b // si a es T o b es T entonces la condicion es T.
var edad = 40
edad ++ // es la variable + 1
edad += 2 // es variable + 2

//**\_\_** CONDICIONALES****\_****
// \_**_if_**
if () {
}
else if () {
}
//si no se cumplio el if se evalua el () del else if
else {
}
//lo que este dentro de () tiene que ser verdad "valida booleans" para que pase lo que esta en {}
// si lo que esta dentro de () es falso, entonces ejecutara el else{}
condition ? true : false; //condicional ternario
var numero = 1;
var resultado = numero === 1 ? "Sí, soy un 1" : "No, no soy 1"

//\_**\_SWITCH\_\_\_\_**
var numero = 1;
switch (true){
case 1:
console.log("Soy uno!");
break;
caso 10:
console.log("Soy un 10!")
break;
caso 50:
console.log("Si, soy un 50")
break;
default:
console.log("No soy nada")
}

//****\_\_****ARRAYS****\_****
var frutas = ["manzana", "plátano", "cereza", "fresa"];
console.log(frutas.length) //imprime el numero de elementos del array

var masFrutas = frutas.push ("uvas") // añade uvas al final del array anterior

var ultimo = frutas.pop ("uvas"); // elimina el ultimo elemento del array

var nuevaLongitud = frutas.unshift("uvas"); //añade elementos al inicio del array

var borrarFruta = frutas.shift("uvas"); // elimina el primer elemento del array

var polisicion =frutas.indexOf ("cereza"); //busca la posicion del elemento dentro del array

//****\_\_\_****LOOPS FOR & FOR...OF****\_\_****
var estudiantes = ["Maria","Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
console.log (`Hola, ${estudiante}`);
}
for (var i = 0; i < estudiantes.length; i++){
saludarEstudiantes(estudiantes[i]);
}

var estudiantes = ["Maria","Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
console.log (`Hola, ${estudiante}`);
}
for (var estudiante of estudiantes){
saludarEstudiantes(estudiante);
}

//****\_\_****LOOPS WHILE****\_\_\_****
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]
function saludarEstudiantes(estudiante){
console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
console.log(estudiantes)
var estudiante = estudiantes.shift();
saludarEstudiantes(estudiante)
}

//******\_\_******OBJECTS******\_\_******
var miAuto = {
marca: "Toyota",
modelo: "Corolla",
annio: 2020,
detalleDelAuto: function(){
console.log (`Auto ${this.modelo} ${this.annio}`)// this hace referencia a su padre que en este caso es miAuto, en la escritura no existe diferencia
}
};

miAuto //imprime los objetos y sus valores

miAuto.marca //imprime el valor del objeto
miAuto.annio //imprime el valor del objeto
miAuto.detalleDelAuto() //imprime los valores del objeto

//**\_\_\_**FUNCION CONSTRUCTORA**\_\_\_\_**

function auto(marca, modelo, annio){
this.marca = marca;
this.modelo =modelo;
this.annio = annio;
}

auto //imprime todo el objeto

var autoNuevo = new auto("Tesla", "Model 3", "2020");
autoNuevo //imprime los valores del objeto
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var AutoNuevo3 = new auto("Toyota", "Corolla", 2020);

autoNuevo2 //imprime los valores del objeto

//****\_\_****METODOS DE RECORRIDOS DE ARRAYS****\_****
var articulos = [
{nombre:"Bici", costo: "3000"},
{nombre:"Tv", costo:"2500"},
{nombre:"Libro", costo:"320"},
{nombre:"Celular", costo:"10000"},
{nombre:"Laptop", costo:"20000"},
{nombre:"Teclado", costo:"500"},
{nombre:"Audifonos", costo:"1700"},
];

//**\_\_\_\_**MEDOTO 1****\_\_****FILTRA ELEMENTOS ESPECIALMENTE
var articulosFiltrados = articulos.filter(function(articulo){
return articulo.costo <=500
});
articulosFiltrados //imprime los valores menores o iguales a 500

//****\_****METODO 2****\_\_\_****MAPEA LOS ELEMENTOS DE
var nombreArticulos = articulos.map (function(srticulo){
return articulo.nombre
});
nombreArticulos // imprime los nombres de los articulos del objeto

//**\_\_\_\_**METODO 3****\_**** BUSCA ALGO DENTRO DEL ARTICULO
var encuentraArticulo = articulos.find(function(articulo){
return articulo.nombre === "Laptop"
});
encuentraArticulos //imprime los elementos y valores del elemento buscado.

//**\_\_\_\_**METODO 4****\_****
articulos.forEach(function(articulo){
console.log(articulo.nombre) //imprime el valor del elemento especificado solamente
});

//****\_****METODO 5****\_****
var articulosBaratos = articulos.some(function(articulo){
return articulo.costo <=700;
});
articulosBaratos //imprime un boleano que afirma si la consicion es verdadera o falsa

//****\_\_****AÑADIR Y ELIMINAR ELEMENTOS DE UN ARRAY****\_****
//Añadir elementos (Numeros) a un Array
//****\_\_**** .push() ****\_\_****

let numArray = [1,2,3,4,5]

//Función
function newNum(){
//Agrego elementos
numArray.push(6,7)
console.log(numArray)//imprime los elementos viejos y los nuevos
}
newNum ()//ejecuto la función para permitir al console.log imprimir los elementos

//Añadir elementos "strings" a un Array
Let txtArray = ["Ana", "Juan", "Diego", "Laura"] //Definición del array
function addCharacters(){
txtArray.push("Chris", "María")
console.log(txtArray)//Imprime los elementos viejos y los nuevos
}
addCharacters () //Ejecuta la funcion para ejecutar el console.log

//****\_\_**** .shift ****\_\_\_\_**** ELIMINA PRIMER ELEMENTO

let array = [1,2,3,4,5]
console.log(array) //imprime el array existente

let shiftArray = array.shift() //Se aplica la eliminacion del primer elemento del array

console.log(array)//imprime el nuevo array con el primer elemento borrado

//****\_\_\_\_**** .pop ******\_\_****** ELIMINA EL ULTIMO ELEMENTO

let array = [1,2,3,4,5]
console.log(array) //imprime el array existente

let shiftArray = array.pop() //Se aplica la eliminacion del ultimo elemento del array

console.log(array)//imprime el nuevo array con el primer elemento borrado

---

---

---

C:\Users\Xavi\Desktop\REACTJS\PLATZI_LEARNING\curso-react-intro

Como inicializar un proyecto con vite con las depedencias necesarias?

- Ubicate en la carpeta donde deseas crear tu proyecto.
  1.  npm init -y
  2.  npm create vite@latest NOMBRETUPROYECTO -- --template react-swc
  3.  cd NOMBRETUPROYECTO
      npm install
      npm run dev

---

npm create vite@latest APRENDEREACT -- --template react-swc
cd NOMBRETUPROYECTO
npm install
npm run dev

npm install @vitejs/plugin-react -E
npm install react react-dom -E

crear un archivo vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

    export default defineConfig({
    plugins: [react()],
    })

en tu archivo main.js borrar todo y colocar esto:

import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('app'));
root.render(<h1> HOLA PLATZI</h1>);
cambiar el nombre del archivo por main.jsx y tambien en el index.HTML por main.jsx

---

La diferencia entre los métodos toLowerCase() y toLocaleLowerCase() en JavaScript está relacionada con la forma en que se procesan los caracteres en mayúsculas y acentuados en diferentes idiomas.

toLowerCase() convierte una cadena de texto en minúsculas, utilizando las reglas de conversión que se aplican a los caracteres ASCII (caracteres en inglés y otros idiomas europeos que no tienen acentos)

Por otro lado, toLocaleLowerCase() también convierte una cadena de texto en minúsculas, pero utiliza las reglas de conversión específicas del idioma y la ubicación (localización) en la que se está ejecutando el código. Esto significa que, en función de la localización, algunos caracteres con acentos o diacríticos (como la letra “á” en español) pueden ser convertidos a su equivalente en minúsculas, mientras que otros caracteres pueden permanecer sin cambios.

---

🔵Evita acceder al localStorage dentro del componente
Acceder a los valores del localStorage dentro del componente es muy pesado en cuanto al rendimiento, ya que se ejecuta sincrónicamente en cada re-renderizado del componente. En su lugar, puedes leerlo utilizando un callback que retorne el valor inicial del useState, esto permitirá acceder a la información una sola vez al momento que se crea el componente, esto por la definición de useState.

---

🔵Evita las dependencias dentro de tus componentes con Custom Hooks
Cuando estás utilizando paquetes dentro de React, por ejemplo, el paquete inventado QueryPlatzi, evita importarlo en cada componente, a menos que sea necesario.

En su lugar, crea un custom Hook para abstraer la funcionalidad del paquete.

---

---

---

---

---

---

---

---

# Repositorio base del Curso de Introducción a React.js en Platzi

¡Hola, Platzinauta!

En este repositorio encontrarás el código de todas las clases del [Curso de Introducción a React.js](https://platzi.com/reactjs). Para empezar solo debes clonar este repositorio (`git clone`), instalar sus dependencias (`npm i`) y ejecutar la aplicación (`npm start`).

La rama principal contiene el código con el que eempezamos el curso. En las demás ramas encontrarás el código de las siguientes clases y finalmente el deploy de la aplicación.

¡Mucha suerte aprendiendo React! #NuncaParesDeAprender

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
