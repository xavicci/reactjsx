import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp.jsx';
import { CounterApp } from './01-useState/CounterApp.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
)
