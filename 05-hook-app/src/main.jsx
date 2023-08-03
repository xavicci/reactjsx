import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HooksApp } from './HooksApp.jsx';
// import { CounterApp } from './01-useState/CounterApp.jsx';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx';
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <MultipleCustomHooks />
  // </React.StrictMode>
)
