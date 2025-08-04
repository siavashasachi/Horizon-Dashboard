import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';

const targetElement = document.getElementById('root');
const root = ReactDOM.createRoot(targetElement);

root.render(
   <Provider store={store}>


   </Provider>
)