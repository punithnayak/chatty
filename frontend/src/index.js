import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import App from './App';
import { Provider } from 'react-redux';
import { userRegister } from './store/actions/authAction';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
