import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './root/App';
import { BrowserRouter } from 'react-router-dom';
import './components/language/i18n'
// import 'antd/dist/antd.css';

// redux
import {legacy_createStore as createStore}  from "redux";
import { Provider } from 'react-redux';
import rootReducer from './context';

// redux-persist = localestorage bilan ishlash
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [], // saqalanmayturgan datala
  whitelist: ["reduxCart", "addToHeart", "auth"] // saqalab qoladi
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

