import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import './internationalization';
import 'moment/locale/ru';

import App from './app';
import store from './store';

import 'normalize.css';
import './stylesheets/index.scss';
import './stylesheets/fonts.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css';

const persist = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persist}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
