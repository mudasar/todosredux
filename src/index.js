import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ConnectedRouter } from 'react-router-redux';
import {Provider} from 'react-redux';
import firebase, {firebaseRef} from './firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import './index.css';
import { history } from './hisotry';



var store = require('./store/configureStore').configure();
var actions = require('./actions');



store.subscribe(()=>{
    var state = store.getState();
    //TodoApi.setTodos(state.todos);
    console.log(state);
});




firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
        console.log('do i fall here ');
        //debugger;;
       store.dispatch(actions.login(user.uid));
       store.dispatch(actions.startAddTodos());
       history.push('/home');
    }else{
       store.dispatch(actions.logout());
    }
});


ReactDOM.render(
    <Provider store={store} >
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
