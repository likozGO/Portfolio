import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import store from './store';

import './services/i18n';
import App from './App';

import 'normalize.css';
import './global/css/index.scss';
import './global/css/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Scrollbars
        style={{ display: 'flex' }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <App />
      </Scrollbars>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
