import React from 'react';
import {render} from 'react-dom';
import routes from './containers/router';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store';


const store = configureStore();
render(
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>
    ,document.getElementById('root')
);