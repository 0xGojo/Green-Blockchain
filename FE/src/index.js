import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './core/app';

import './core/configs/i18nConfig';
import './assets/stylesheets/app.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <I18nextProvider i18n={ i18next }>
        <Provider store={ store }>
            <PersistGate loading={ null } persistor={ persistor }>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
  </I18nextProvider>
, document.getElementById('root'));