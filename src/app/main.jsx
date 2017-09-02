import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { creteStore } from 'redux';
import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';

import App from './components/app';

import '../style/scss/main.scss';

installDevTools(Immutable);

const initialState = {};

const reducer = (state = initialState, action) => {
    switch(action.type) {

    }
};

const store = creteStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'),
);
