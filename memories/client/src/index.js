import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import { createRoot } from 'react-dom/client';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// pre-React 17 implementation
//import ReactDOM from 'react-dom';
//ReactDOM.render(<App />, document.getElementById('root'));

// new implementation, after React 18 (released Mar 2022)
// requires: [import { createRoot } from 'react-dom/client';]. See line 4.
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);