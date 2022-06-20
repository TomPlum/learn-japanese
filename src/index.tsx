import React from 'react';
import ReactDOM from 'react-dom';
import './styles/sass/index.scss';
import LearnJapanese from './LearnJapanese';
import { store } from "./store";
import { injectStore } from "./rest/Interceptors";

injectStore(store);

ReactDOM.render(
    <React.StrictMode>
        <LearnJapanese store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
);
