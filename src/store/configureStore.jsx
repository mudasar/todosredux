import {searchTextReducer, showCompletedReducer, todoRecuder} from '../reducers';
var redux = require('redux');
var thunk = require('redux-thunk').default;

//=-----------------------------------------=
export var configure = () => {
    var reducer = redux.combineReducers({searchText: searchTextReducer, showCompleted: showCompletedReducer, todos: todoRecuder});
    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));

    return store;
};