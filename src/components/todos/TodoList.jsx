import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Todo from './Todo';
import {filterTodos} from '../../api/TodosApi';

class TodoList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { todos, showCompleted, searchText } = this.props;
        console.log(todos);
        function mapTodos() {
            if (todos && todos.length > 0) {
                return filterTodos(todos, showCompleted, searchText).map((todo) => <Todo key={todo.id} {...todo}  />);
            }else{
                return <p>Nothing To Do.</p>
            }
        }

        return (
            <div className="row">
                <div className="large-11 medium-11 small-12 coumns small-centered">
                    {mapTodos()}
                </div>
            </div>
        );
    }
}

TodoList.propTypes = {

};

const mapStateToProps = (state, ownProps) => {
    return state;
}

export default connect(mapStateToProps)(TodoList);