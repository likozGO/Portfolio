import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import store from './store';
import './internationalization';
import App from './app';
import 'normalize.css';
import './stylesheets/index.scss';
import './stylesheets/fonts.css';

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Scrollbars
          style={{ display: 'flex' }}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          <App />
        </Scrollbars>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
