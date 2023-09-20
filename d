[33mcommit 073f5d0cfd0cb1d189bc68f26d183814bf79182e[m[33m ([m[1;36mHEAD -> [m[1;32mREACTJS[m[33m, [m[1;31morigin/REACTJS[m[33m)[m
Author: Xavi Flores <xa_franc@live.com>
Date:   Mon Sep 18 15:59:38 2023 -0600

    chapter17

[1mdiff --git a/PLATZI/curso-react-intro/README.md b/PLATZI/curso-react-intro/README.md[m
[1mindex decdc5e..180fb9e 100644[m
[1m--- a/PLATZI/curso-react-intro/README.md[m
[1m+++ b/PLATZI/curso-react-intro/README.md[m
[36m@@ -1,67 +1,396 @@[m
[32m+[m[32m//**\_**VALORES**\_**[m
[32m+[m[32m//40 numero[m
[32m+[m
[32m+[m[32m//"texto" Texto o string[m
[32m+[m
[32m+[m[32m//true boleano[m
[32m+[m[32m//false boleano[m
[32m+[m
[32m+[m[32m//null valores vacios[m
[32m+[m[32m//undefined valores vacios[m
[32m+[m
[32m+[m[32m//[1,2,3,4]valores primitivos dentro de un array "Esto es tipo objeto"[m
[32m+[m
[32m+[m[32m//{nombre: "daniel"} Valor tipo objeto[m
[32m+[m
[32m+[m[32mvar nombre = "Oscar";[m
[32m+[m[32m// declarar[m
[32m+[m[32mvar edad;[m
[32m+[m[32m// inicializar[m
[32m+[m[32medad = 30;[m
[32m+[m[32mvar elementos = ["Computadora, Celular"][m
[32m+[m[32mvar persona = {[m
[32m+[m[32mnombre: "Daniel",[m
[32m+[m[32medad: 30[m
[32m+[m[32m}[m
[32m+[m[32mpersona[m
[32m+[m
[32m+[m[32m//\_**\_FUNCIONES\_\_\_**[m
[32m+[m
[32m+[m[32m// Funciones Declararivas[m
[32m+[m[32mfunction miFuncion(c,d) {[m
[32m+[m[32mreturn c + d;[m
[32m+[m[32m}[m
[32m+[m[32mmiFuncion ();[m
[32m+[m
[32m+[m[32m// Funciones de Expresión[m
[32m+[m[32mvar mifuncion = function (a,b){[m
[32m+[m[32mreturn a + b;[m
[32m+[m[32m}[m
[32m+[m[32mmifuncion ();[m
[32m+[m
[32m+[m[32m//**\_**HOISTING**\_**[m
[32m+[m[32mconsole.log(miNombre)[m
[32m+[m[32mvar miNombre = "Daniel";[m
[32m+[m[32mhey ();[m
[32m+[m[32mfunction hey() {[m
[32m+[m[32mconsole.log("hola "miNombre)[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//**\_\_**COHERCION**\_\_\_**[m
[32m+[m[32m//Cohercion inplicita[m
[32m+[m[32mvar a = 4 + "7";[m
[32m+[m[32ma[m
[32m+[m[32m// a es un string[m
[32m+[m[32mvar b = 3 \* "4";[m
[32m+[m[32mb[m
[32m+[m[32m// b es tipo numero7[m
[32m+[m
[32m+[m[32m//cohercion explicita[m
[32m+[m[32md = 34;[m
[32m+[m[32mvar e = String(d);[m
[32m+[m[32m// d es un numero y e es un string con el calor de d[m
[32m+[m[32mf= "45";[m
[32m+[m[32mvar g = Number(f);[m
[32m+[m[32m// f es un valor String y g es tiene el valor de f pero es un tipo Número[m
[32m+[m
[32m+[m[32m//**\_\_\_**TRUTHY & FALSY**\_\_**[m
[32m+[m[32m// FALSE\_\_\_FALSE[m
[32m+[m[32mBoolean (0);[m
[32m+[m[32m//false[m
[32m+[m[32mBoolean (null);[m
[32m+[m[32m//false[m
[32m+[m[32mBoolean (NaN);[m
[32m+[m[32m//false[m
[32m+[m[32mBoolean (undefined);[m
[32m+[m[32m//false[m
[32m+[m[32mBoolean (false);[m
[32m+[m[32m//false[m
[32m+[m[32mBoolean ("");[m
[32m+[m[32m//false[m
[32m+[m
[32m+[m[32m// TRUE \_\_\_\_TRUE[m
[32m+[m[32mBoolean (" ");[m
[32m+[m[32m//true[m
[32m+[m[32mBoolean ("a");[m
[32m+[m[32m//true[m
[32m+[m[32mBoolean (1);[m
[32m+[m[32m//true[m
[32m+[m[32mBoolean ([]);[m
[32m+[m[32m//true[m
[32m+[m[32mBoolean ({});[m
[32m+[m[32m//true[m
[32m+[m[32mBoolean (function());[m
[32m+[m[32m//true[m
[32m+[m[32mBoolean (true);[m
[32m+[m[32m//true[m
[32m+[m
[32m+[m[32m//**\_\_\_**OPERADORES****\_\_****[m
[32m+[m[32m// Operadores Matematicos[m
[32m+[m[32m3 + 2[m
[32m+[m[32m//5[m
[32m+[m[32m25 - 10[m
[32m+[m[32m//15[m
[32m+[m[32m10 \* 3[m
[32m+[m[32m//30[m
[32m+[m[32m15 / 3[m
[32m+[m[32m//5[m
[32m+[m[32m"Daniel" + "Valdivieso"[m
[32m+[m[32m//Daniel Valdivieso[m
[32m+[m
[32m+[m[32m! //negación[m
[32m+[m[32m!false[m
[32m+[m[32m//true[m
[32m+[m[32m= //asignacion var a = 1[m
[32m+[m[32m== //comparación 3 == "3" ?[m
[32m+[m[32m=== // 3 === "3" falso porque uno es string y otro es numero por lo tanto no son exactamente iguales[m
[32m+[m
[32m+[m[32m5 < 3 //false[m
[32m+[m[32m5 > 3 //True[m
[32m+[m[32m5 <= 6 //true[m
[32m+[m[32m5 >= 6 //false[m
[32m+[m[32ma && b // si a es T y b es T entonces es True, si alguna es falsa entonces el condicional es falso[m
[32m+[m[32m!= //diferente[m
[32m+[m[32ma || b // si a es T o b es T entonces la condicion es T.[m
[32m+[m[32mvar edad = 40[m
[32m+[m[32medad ++ // es la variable + 1[m
[32m+[m[32medad += 2 // es variable + 2[m
[32m+[m
[32m+[m[32m//**\_\_** CONDICIONALES****\_****[m
[32m+[m[32m// \_**_if_**[m
[32m+[m[32mif () {[m
[32m+[m[32m}[m
[32m+[m[32melse if () {[m
[32m+[m[32m}[m
[32m+[m[32m//si no se cumplio el if se evalua el () del else if[m
[32m+[m[32melse {[m
[32m+[m[32m}[m
[32m+[m[32m//lo que este dentro de () tiene que ser verdad "valida booleans" para que pase lo que esta en {}[m
[32m+[m[32m// si lo que esta dentro de () es falso, entonces ejecutara el else{}[m
[32m+[m[32mcondition ? true : false; //condicional ternario[m
[32m+[m[32mvar numero = 1;[m
[32m+[m[32mvar resultado = numero === 1 ? "Sí, soy un 1" : "No, no soy 1"[m
[32m+[m
[32m+[m[32m//\_**\_SWITCH\_\_\_\_**[m
[32m+[m[32mvar numero = 1;[m
[32m+[m[32mswitch (true){[m
[32m+[m[32mcase 1:[m
[32m+[m[32mconsole.log("Soy uno!");[m
[32m+[m[32mbreak;[m
[32m+[m[32mcaso 10:[m
[32m+[m[32mconsole.log("Soy un 10!")[m
[32m+[m[32mbreak;[m
[32m+[m[32mcaso 50:[m
[32m+[m[32mconsole.log("Si, soy un 50")[m
[32m+[m[32mbreak;[m
[32m+[m[32mdefault:[m
[32m+[m[32mconsole.log("No soy nada")[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//****\_\_****ARRAYS****\_****[m
[32m+[m[32mvar frutas = ["manzana", "plátano", "cereza", "fresa"];[m
[32m+[m[32mconsole.log(frutas.length) //imprime el numero de elementos del array[m
[32m+[m
[32m+[m[32mvar masFrutas = frutas.push ("uvas") // añade uvas al final del array anterior[m
[32m+[m
[32m+[m[32mvar ultimo = frutas.pop ("uvas"); // elimina el ultimo elemento del array[m
[32m+[m
[32m+[m[32mvar nuevaLongitud = frutas.unshift("uvas"); //añade elementos al inicio del array[m
[32m+[m
[32m+[m[32mvar borrarFruta = frutas.shift("uvas"); // elimina el primer elemento del array[m
[32m+[m
[32m+[m[32mvar polisicion =frutas.indexOf ("cereza"); //busca la posicion del elemento dentro del array[m
[32m+[m
[32m+[m[32m//****\_\_\_****LOOPS FOR & FOR...OF****\_\_****[m
[32m+[m[32mvar estudiantes = ["Maria","Sergio", "Rosa", "Daniel"];[m
[32m+[m
[32m+[m[32mfunction saludarEstudiantes(estudiante) {[m
[32m+[m[32mconsole.log (`Hola, ${estudiante}`);[m
[32m+[m[32m}[m
[32m+[m[32mfor (var i = 0; i < estudiantes.length; i++){[m
[32m+[m[32msaludarEstudiantes(estudiantes[i]);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mvar estudiantes = ["Maria","Sergio", "Rosa", "Daniel"];[m
[32m+[m
[32m+[m[32mfunction saludarEstudiantes(estudiante) {[m
[32m+[m[32mconsole.log (`Hola, ${estudiante}`);[m
[32m+[m[32m}[m
[32m+[m[32mfor (var estudiante of estudiantes){[m
[32m+[m[32msaludarEstudiantes(estudiante);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//****\_\_****LOOPS WHILE****\_\_\_****[m
[32m+[m[32mvar estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"][m
[32m+[m[32mfunction saludarEstudiantes(estudiante){[m
[32m+[m[32mconsole.log(`Hola, ${estudiante}`);[m
[32m+[m[32m}[m
[32m+[m[32mwhile(estudiantes.length > 0){[m
[32m+[m[32mconsole.log(estudiantes)[m
[32m+[m[32mvar estudiante = estudiantes.shift();[m
[32m+[m[32msaludarEstudiantes(estudiante)[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m//******\_\_******OBJECTS******\_\_******[m
[32m+[m[32mvar miAuto = {[m
[32m+[m[32mmarca: "Toyota",[m
[32m+[m[32mmodelo: "Corolla",[m
[32m+[m[32mannio: 2020,[m
[32m+[m[32mdetalleDelAuto: function(){[m
[32m+[m[32mconsole.log (`Auto ${this.modelo} ${this.annio}`)// this hace referencia a su padre que en este caso es miAuto, en la escritura no existe diferencia[m
[32m+[m[32m}[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mmiAuto //imprime los objetos y sus valores[m
[32m+[m
[32m+[m[32mmiAuto.marca //imprime el valor del objeto[m
[32m+[m[32mmiAuto.annio //imprime el valor del objeto[m
[32m+[m[32mmiAuto.detalleDelAuto() //imprime los valores del objeto[m
[32m+[m
[32m+[m[32m//**\_\_\_**FUNCION CONSTRUCTORA**\_\_\_\_**[m
[32m+[m
[32m+[m[32mfunction auto(marca, modelo, annio){[m
[32m+[m[32mthis.marca = marca;[m
[32m+[m[32mthis.modelo =modelo;[m
[32m+[m[32mthis.annio = annio;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mauto //imprime todo el objeto[m
[32m+[m
[32m+[m[32mvar autoNuevo = new auto("Tesla", "Model 3", "2020");[m
[32m+[m[32mautoNuevo //imprime los valores del objeto[m
[32m+[m[32mvar autoNuevo2 = new auto("Tesla", "Model X", 2018);[m
[32m+[m[32mvar AutoNuevo3 = new auto("Toyota", "Corolla", 2020);[m
[32m+[m
[32m+[m[32mautoNuevo2 //imprime los valores del objeto[m
[32m+[m
[32m+[m[32m//****\_\_****METODOS DE RECORRIDOS DE ARRAYS****\_****[m
[32m+[m[32mvar articulos = [[m
[32m+[m[32m{nombre:"Bici", costo: "3000"},[m
[32m+[m[32m{nombre:"Tv", costo:"2500"},[m
[32m+[m[32m{nombre:"Libro", costo:"320"},[m
[32m+[m[32m{nombre:"Celular", costo:"10000"},[m
[32m+[m[32m{nombre:"Laptop", costo:"20000"},[m
[32m+[m[32m{nombre:"Teclado", costo:"500"},[m
[32m+[m[32m{nombre:"Audifonos", costo:"1700"},[m
[32m+[m[32m];[m
[32m+[m
[32m+[m[32m//**\_\_\_\_**MEDOTO 1****\_\_****FILTRA ELEMENTOS ESPECIALMENTE[m
[32m+[m[32mvar articulosFiltrados = articulos.filter(function(articulo){[m
[32m+[m[32mreturn articulo.costo <=500[m
[32m+[m[32m});[m
[32m+[m[32marticulosFiltrados //imprime los valores menores o iguales a 500[m
[32m+[m
[32m+[m[32m//****\_****METODO 2****\_\_\_****MAPEA LOS ELEMENTOS DE[m
[32m+[m[32mvar nombreArticulos = articulos.map (function(srticulo){[m
[32m+[m[32mreturn articulo.nombre[m
[32m+[m[32m});[m
[32m+[m[32mnombreArticulos // imprime los nombres de los articulos del objeto[m
[32m+[m
[32m+[m[32m//**\_\_\_\_**METODO 3****\_**** BUSCA ALGO DENTRO DEL ARTICULO[m
[32m+[m[32mvar encuentraArticulo = articulos.find(function(articulo){[m
[32m+[m[32mreturn articulo.nombre === "Laptop"[m
[32m+[m[32m});[m
[32m+[m[32mencuentraArticulos //imprime los elementos y valores del elemento buscado.[m
[32m+[m
[32m+[m[32m//**\_\_\_\_**METODO 4****\_****[m
[32m+[m[32marticulos.forEach(function(articulo){[m
[32m+[m[32mconsole.log(articulo.nombre) //imprime el valor del elemento especificado solamente[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32m//****\_****METODO 5****\_****[m
[32m+[m[32mvar articulosBaratos = articulos.some(function(articulo){[m
[32m+[m[32mreturn articulo.costo <=700;[m
[32m+[m[32m});[m
[32m+[m[32marticulosBaratos //imprime un boleano que afirma si la consicion es verdadera o falsa[m
[32m+[m
[32m+[m[32m//****\_\_****AÑADIR Y ELIMINAR ELEMENTOS DE UN ARRAY****\_****[m
[32m+[m[32m//Añadir elementos (Numeros) a un Array[m
[32m+[m[32m//****\_\_**** .push() ****\_\_****[m
[32m+[m
[32m+[m[32mlet numArray = [1,2,3,4,5][m
[32m+[m
[32m+[m[32m//Función[m
[32m+[m[32mfunction newNum(){[m
[32m+[m[32m//Agrego elementos[m
[32m+[m[32mnumArray.push(6,7)[m
[32m+[m[32mconsole.log(numArray)//imprime los elementos viejos y los nuevos[m
[32m+[m[32m}[m
[32m+[m[32mnewNum ()//ejecuto la función para permitir al console.log imprimir los elementos[m
[32m+[m
[32m+[m[32m//Añadir elementos "strings" a un Array[m
[32m+[m[32mLet txtArray = ["Ana", "Juan", "Diego", "Laura"] //Definición del array[m
[32m+[m[32mfunction addCharacters(){[m
[32m+[m[32mtxtArray.push("Chris", "María")[m
[32m+[m[32mconsole.log(txtArray)//Imprime los elementos viejos y los nuevos[m
[32m+[m[32m}[m
[32m+[m[32maddCharacters () //Ejecuta la funcion para ejecutar el console.log[m
[32m+[m
[32m+[m[32m//****\_\_**** .shift ****\_\_\_\_**** ELIMINA PRIMER ELEMENTO[m
[32m+[m
[32m+[m[32mlet array = [1,2,3,4,5][m
[32m+[m[32mconsole.log(array) //imprime el array existente[m
[32m+[m
[32m+[m[32mlet shiftArray = array.shift() //Se aplica la eliminacion del primer elemento del array[m
[32m+[m
[32m+[m[32mconsole.log(array)//imprime el nuevo array con el primer elemento borrado[m
[32m+[m
[32m+[m[32m//****\_\_\_\_**** .pop ******\_\_****** ELIMINA EL ULTIMO ELEMENTO[m
[32m+[m
[32m+[m[32mlet array = [1,2,3,4,5][m
[32m+[m[32mconsole.log(array) //imprime el array existente[m
[32m+[m
[32m+[m[32mlet shiftArray = array.pop() //Se aplica la eliminacion del ultimo elemento del array[m
[32m+[m
[32m+[m[32mconsole.log(array)//imprime el nuevo array con el primer elemento borrado[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
 C:\Users\Xavi\Desktop\REACTJS\PLATZI_LEARNING\curso-react-intro[m
 [m
 Como inicializar un proyecto con vite con las depedencias necesarias?[m
 [m
 - Ubicate en la carpeta donde deseas crear tu proyecto.[m
[31m-	1.  npm init -y[m
[31m-	2.  npm create vite@latest NOMBRETUPROYECTO -- --template react-swc[m
[31m-	3.    cd NOMBRETUPROYECTO [m
[31m-  		npm install[m
[31m-  		npm run dev[m
[32m+[m[32m  1.  npm init -y[m
[32m+[m[32m  2.  npm create vite@latest NOMBRETUPROYECTO -- --template react-swc[m
[32m+[m[32m  3.  cd NOMBRETUPROYECTO[m
[32m+[m[32m      npm install[m
[32m+[m[32m      npm run dev[m
[32m+[m
[32m+[m[32m---[m
 [m
[31m-***************************************************************************[m
 npm create vite@latest APRENDEREACT -- --template react-swc[m
[31m-        cd NOMBRETUPROYECTO [m
[31m-  		npm install[m
[31m-  		npm run dev[m
[32m+[m[32mcd NOMBRETUPROYECTO[m
[32m+[m[32mnpm install[m
[32m+[m[32mnpm run dev[m
 [m
 npm install @vitejs/plugin-react -E[m
 npm install react react-dom -E[m
 [m
 crear un archivo vite.config.js[m
[31m-    import { defineConfig } from 'vite'[m
[31m-    import react from '@vitejs/plugin-react-swc'[m
[32m+[m[32mimport { defineConfig } from 'vite'[m
[32m+[m[32mimport react from '@vitejs/plugin-react-swc'[m
 [m
     export default defineConfig({[m
     plugins: [react()],[m
     })[m
 [m
[31m-[m
[31m-en tu archivo main.js borrar todo  y colocar esto:[m
[32m+[m[32men tu archivo main.js borrar todo y colocar esto:[m
 [m
 import { createRoot } from 'react-dom/client';[m
 const root = createRoot(document.getElementById('app'));[m
 root.render(<h1> HOLA PLATZI</h1>);[m
 cambiar el nombre del archivo por main.jsx y tambien en el index.HTML por main.jsx[m
 [m
[32m+[m[32m---[m
 [m
[31m-**************************************************[m
 La diferencia entre los métodos toLowerCase() y toLocaleLowerCase() en JavaScript está relacionada con la forma en que se procesan los caracteres en mayúsculas y acentuados en diferentes idiomas.[m
 [m
 toLowerCase() convierte una cadena de texto en minúsculas, utilizando las reglas de conversión que se aplican a los caracteres ASCII (caracteres en inglés y otros idiomas europeos que no tienen acentos)[m
 [m
 Por otro lado, toLocaleLowerCase() también convierte una cadena de texto en minúsculas, pero utiliza las reglas de conversión específicas del idioma y la ubicación (localización) en la que se está ejecutando el código. Esto significa que, en función de la localización, algunos caracteres con acentos o diacríticos (como la letra “á” en español) pueden ser convertidos a su equivalente en minúsculas, mientras que otros caracteres pueden permanecer sin cambios.[m
 [m
[31m-******************************************************[m
[32m+[m[32m---[m
[32m+[m
 🔵Evita acceder al localStorage dentro del componente[m
 Acceder a los valores del localStorage dentro del componente es muy pesado en cuanto al rendimiento, ya que se ejecuta sincrónicamente en cada re-renderizado del componente. En su lugar, puedes leerlo utilizando un callback que retorne el valor inicial del useState, esto permitirá acceder a la información una sola vez al momento que se crea el componente, esto por la definición de useState.[m
 [m
[31m-******************************************************[m
[32m+[m[32m---[m
[32m+[m
 🔵Evita las dependencias dentro de tus componentes con Custom Hooks[m
 Cuando estás utilizando paquetes dentro de React, por ejemplo, el paquete inventado QueryPlatzi, evita importarlo en cada componente, a menos que sea necesario.[m
 [m
 En su lugar, crea un custom Hook para abstraer la funcionalidad del paquete.[m
[31m-******************************************************[m
[31m-******************************************************[m
[31m-******************************************************[m
[31m-******************************************************[m
[31m-******************************************************[m
[31m-******************************************************[m
[31m-******************************************************[m
[31m-******************************************************[m
 [m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m---[m
[32m+[m
[32m+[m[32m---[m
 [m
[32m+[m[32m---[m
 [m
[32m+[m[32m---[m
 [m
 # Repositorio base del Curso de Introducción a React.js en Platzi[m
 [m
[1mdiff --git a/PLATZI/curso-react-intro/src/App/index.js b/PLATZI/curso-react-intro/src/App/index.js[m
[1mindex ea7e8f2..d93171c 100644[m
[1m--- a/PLATZI/curso-react-intro/src/App/index.js[m
[1m+++ b/PLATZI/curso-react-intro/src/App/index.js[m
[36m@@ -1,7 +1,8 @@[m
[31m-import { useState } from 'react';[m
[32m+[m[32mimport { useState,useEffect } from 'react';[m
 import { CreateTodoButton, TodoSearch, TodoList, TodoItem, TodoCounter } from '../Components';[m
 import { useLocalStorage } from './useLocalStorage';[m
 [m
[32m+[m[32m// localStorage.removeItem('TODOS_V1');[m
 [m
 // const defaultTodos = [[m
 //   { id: 1, text: 'Ir a trabajar', completed: true },[m
[36m@@ -12,12 +13,15 @@[m [mimport { useLocalStorage } from './useLocalStorage';[m
 //   { id: 5, text: 'Estudiar', completed: false },[m
 // ][m
 [m
[31m-// localStorage.setItem('TODOS_V1', defaultTodos);[m
[31m-// localStorage.removeItem('TODOS_V1');[m
[32m+[m[32m// localStorage.setItem('TODOS_V1', JSON.stringify( defaultTodos));[m
 [m
 function App() {[m
 [m
[31m-  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);[m
[32m+[m[32m  const {[m
[32m+[m[32m    item:todos,[m
[32m+[m[32m     saveItem:saveTodos,[m
[32m+[m[32m     loading,[m
[32m+[m[32m     error} = useLocalStorage('TODOS_V1', []);[m
 [m
   const [searchValue, setSearchValue] = useState('');[m
 [m
[36m@@ -25,13 +29,15 @@[m [mfunction App() {[m
   const completedTodos = todos.filter(todo => !!todo.completed).length;[m
 [m
   const totalTodos = todos.length;[m
[31m-[m
[31m-  console.log('Log 1');[m
[31m-  console.log('Log 2');[m
[31m-  console.log('Log 3');[m
[31m-  console.log('Log 4');[m
[31m-  console.log('Log 5');[m
[31m-[m
[32m+[m[41m  [m
[32m+[m[32m  // useEffect(() => {[m
[32m+[m[32m  //   console.log('Log 2');[m
[32m+[m[32m  // });[m
[32m+[m[41m  [m
[32m+[m[32m  // useEffect(() => {[m
[32m+[m[32m  //   console.log('Log 2');[m
[32m+[m[32m  // },[]);[m
[32m+[m[41m  [m
   const searchedTodos = todos.filter([m
     (todo) => (todo.text.toLowerCase().includes(searchValue.toLowerCase()))[m
   );[m
[36m@@ -63,7 +69,11 @@[m [mfunction App() {[m
       />[m
 [m
       <TodoList>[m
[31m-        {/* console.log(object) */}[m
[32m+[m[32m        {loading && <p> Estamos cargando...</p>}[m
[32m+[m[32m        {error && <p> Hubo un error...</p>}[m
[32m+[m[32m        {(!loading && searchedTodos.length==0) && <p> Crea tu primer TODO!!</p>}[m
[32m+[m
[32m+[m
         {searchedTodos.map(({ id, text, completed }) => ([m
           <TodoItem[m
             key={id}[m
[1mdiff --git a/PLATZI/curso-react-intro/src/App/useLocalStorage.js b/PLATZI/curso-react-intro/src/App/useLocalStorage.js[m
[1mindex 4281769..f6f1f80 100644[m
[1m--- a/PLATZI/curso-react-intro/src/App/useLocalStorage.js[m
[1m+++ b/PLATZI/curso-react-intro/src/App/useLocalStorage.js[m
[36m@@ -1,24 +1,40 @@[m
[31m-import { useState } from "react";[m
[32m+[m[32mimport { useState, useEffect } from "react";[m
 [m
 export const useLocalStorage =(itemName, initalValue)=> {[m
 [m
[31m-    const localStorageItem = localStorage.getItem(itemName);[m
[32m+[m[32m    const [item, setItem] = useState(initalValue);[m
[32m+[m[32m    const [loading, setLoading] = useState(true);[m
[32m+[m[32m    const [error, setError] = useState(false);[m
[32m+[m[41m        [m
[32m+[m[32m    useEffect(() => {[m
 [m
[31m-    let parsedItem;[m
[31m-[m
[31m-    if (!localStorageItem) {[m
[31m-        localStorage.setItem(itemName, initalValue);[m
[31m-        parsedItem = [];[m
[31m-    } else {[m
[31m-        parsedItem = JSON.parse(localStorageItem);[m
[31m-    }[m
[31m-[m
[31m-    const [item, setItem] = useState(parsedItem);[m
[32m+[m[32m        setTimeout(()=>{[m
[32m+[m[32m            try {[m
[32m+[m[32m                const localStorageItem = localStorage.getItem(itemName);[m
[32m+[m[32m                let parsedItem;[m
[32m+[m[41m        [m
[32m+[m[32m                if (!localStorageItem) {[m
[32m+[m[32m                    localStorage.setItem(itemName, initalValue);[m
[32m+[m[32m                    parsedItem = [];[m
[32m+[m[32m                } else {[m
[32m+[m[32m                    parsedItem = JSON.parse(localStorageItem);[m
[32m+[m[32m                    setItem(parsedItem);[m
[32m+[m[32m                }[m
[32m+[m[41m        [m
[32m+[m[32m                setLoading(false);[m
[32m+[m[41m                [m
[32m+[m[32m                }catch (error){[m
[32m+[m[32m                    setLoading(false);[m
[32m+[m[32m                    setError(true);[m
[32m+[m[32m                }[m
[32m+[m[32m        },2000);[m
 [m
[32m+[m[32m    }, []);[m
[32m+[m[41m   [m
     const saveItem = (newItem) => {[m
         localStorage.setItem(itemName, JSON.stringify(newItem));[m
         setItem(newItem);[m
     };[m
 [m
[31m-    return [item, saveItem];[m
[32m+[m[32m    return {item, saveItem,loading,error};[m
 }[m
\ No newline at end of file[m
