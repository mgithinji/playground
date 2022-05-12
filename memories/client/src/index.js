import React from 'react';

import App from './App';
import { createRoot } from 'react-dom/client';

// pre-React 17 implementation
//import ReactDOM from 'react-dom';
//ReactDOM.render(<App />, document.getElementById('root'));

// new implementation, after React 18 (released Mar 2022)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)