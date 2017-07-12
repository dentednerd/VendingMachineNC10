import ReactDOM from 'react-dom';
import React from 'react';
import reducer from './reducers/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';

const store = createStore(reducer);

ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));