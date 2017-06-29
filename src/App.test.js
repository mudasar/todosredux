import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {ConnectedRouter } from 'react-router-redux';
import {Provider} from 'react-redux';
import { history } from './hisotry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store} >
    <Router history={history}>
        <App />
    </Router>
    </Provider>, div);
});
