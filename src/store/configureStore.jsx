import {searchTextReducer, showCompletedReducer, todoRecuder, authReducer} from '../reducers';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import { history } from './../hisotry';
var redux = require('redux');
var thunk = require('redux-thunk').default;

//=-----------------------------------------=
export var configure = () => {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todoRecuder,
        auth: authReducer,
        router: routerReducer,
        });

    var store = redux.createStore(reducer, undefined, redux.compose(
        
        redux.applyMiddleware(thunk),
        redux.applyMiddleware(routerMiddleware(history)),
        window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));

    return store;
};