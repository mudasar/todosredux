import React from 'react'
import uuid from 'uuid';
import moment from 'moment';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoFilter from './TodoFilter';

import * as actions from '../../actions';

class Todos extends React.Component {
    constructor(props) {
        super(props)   
    }

    render() {
        return (
            <div className="row align-center align-middle">
                <div className="small-12 large-centered large-6 medium-6 columns">
                    <div className="callout">
                        <TodoFilter/>
                        <TodoList/>
                        <AddTodo/>
                    </div>

                </div>
                {this.props.children}
            </div>
        )
    }
}
export default Todos;