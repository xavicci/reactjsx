import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';



ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    // <FirstApp title='hola soy vegeta' />
    <CounterApp value={100} />
    // {/* </React.StrictMode> */}
);