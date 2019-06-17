import React from 'react';
import ReactDOM from 'react-dom';
import * as history from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { I18nextProvider } from 'react-i18next';
import { Router } from 'react-router';
import i18n from './locales/i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const browserHistory = history.createBrowserHistory();
const routingStore = new RouterStore();

export const stores = {
    routing: routingStore,
};

const historyStore = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider {...stores}>
        <I18nextProvider i18n={i18n}>
            <Router history={historyStore}>
                <App />
            </Router>
        </I18nextProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
