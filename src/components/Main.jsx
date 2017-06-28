import React, { Component, PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

import Todos from './todos/Todos';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/todos" component={Todos} />

                <Route  path="/about" component={About} />
                <Route  path="/contact" component={Contact} />
                <Route path="*" component={ NotFound }></Route>
            </Switch>
        )
    }
}

Main.propTypes = {

}

export default Main;