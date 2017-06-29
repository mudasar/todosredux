import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import './index.css';

import firebase, {firebaseRef} from './firebase';

var store = require('./store/configureStore').configure();
var actions = require('./actions');



store.subscribe(()=>{
    var state = store.getState();
    //TodoApi.setTodos(state.todos);
    console.log(state);
});


store.dispatch(actions.startAddTodos());

firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
        
    }else{
        
    }
});


ReactDOM.render(
    <Provider store={store} >
    <Router>
        <App />
    </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
