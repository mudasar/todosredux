import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

class TodoList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Todo List
            </div>
        );
    }
}

TodoList.propTypes = {

};

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);