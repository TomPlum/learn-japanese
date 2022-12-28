import React from 'react';
import ReactDOM from 'react-dom';
import './styles/sass/index.scss';
import LearnJapanese from './LearnJapanese';
import { store } from "./store";
import { injectStore } from "./rest/Interceptors";
import {worker} from "./mocks/browser";

injectStore(store);

const prepareMockServiceWorker = async () => {
    if (process.env.REACT_APP_ENVIRONMENT === 'msw') {
        const { worker } = require('./mocks/browser')
        return worker.start()
    }
    return Promise.resolve()
}

prepareMockServiceWorker().then(() => {
    ReactDOM.render(
        <React.StrictMode>
            <LearnJapanese store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
})
