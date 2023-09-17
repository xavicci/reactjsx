C:\Users\Xavi\Desktop\REACTJS\PLATZI_LEARNING\curso-react-intro

Como inicializar un proyecto con vite con las depedencias necesarias?

- Ubicate en la carpeta donde deseas crear tu proyecto.
	1.  npm init -y
	2.  npm create vite@latest NOMBRETUPROYECTO -- --template react-swc
	3.    cd NOMBRETUPROYECTO 
  		npm install
  		npm run dev

***************************************************************************
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


en tu archivo main.js borrar todo  y colocar esto:

import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('app'));
root.render(<h1> HOLA PLATZI</h1>);
cambiar el nombre del archivo por main.jsx y tambien en el index.HTML por main.jsx


**************************************************
La diferencia entre los métodos toLowerCase() y toLocaleLowerCase() en JavaScript está relacionada con la forma en que se procesan los caracteres en mayúsculas y acentuados en diferentes idiomas.

toLowerCase() convierte una cadena de texto en minúsculas, utilizando las reglas de conversión que se aplican a los caracteres ASCII (caracteres en inglés y otros idiomas europeos que no tienen acentos)

Por otro lado, toLocaleLowerCase() también convierte una cadena de texto en minúsculas, pero utiliza las reglas de conversión específicas del idioma y la ubicación (localización) en la que se está ejecutando el código. Esto significa que, en función de la localización, algunos caracteres con acentos o diacríticos (como la letra “á” en español) pueden ser convertidos a su equivalente en minúsculas, mientras que otros caracteres pueden permanecer sin cambios.

******************************************************
🔵Evita acceder al localStorage dentro del componente
Acceder a los valores del localStorage dentro del componente es muy pesado en cuanto al rendimiento, ya que se ejecuta sincrónicamente en cada re-renderizado del componente. En su lugar, puedes leerlo utilizando un callback que retorne el valor inicial del useState, esto permitirá acceder a la información una sola vez al momento que se crea el componente, esto por la definición de useState.

******************************************************
🔵Evita las dependencias dentro de tus componentes con Custom Hooks
Cuando estás utilizando paquetes dentro de React, por ejemplo, el paquete inventado QueryPlatzi, evita importarlo en cada componente, a menos que sea necesario.

En su lugar, crea un custom Hook para abstraer la funcionalidad del paquete.
******************************************************
******************************************************
******************************************************
******************************************************
******************************************************
******************************************************
******************************************************
******************************************************




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
