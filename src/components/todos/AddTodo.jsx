import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actions from '../../actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {};

         this.onAddTodo = this.onAddTodo.bind(this);
    }

    onAddTodo(e){
        e.preventDefault();
        
        const todo = this.refs.todo.value;
        if (todo.length > 0) {
             this.props.handleAddTodo(todo);
            this.refs.todo.value = '';
        }else{
            this.refs.todo.focus();
        }
    }

    render () {
        return (
           <div className="row align-center">
                <div className="large-11 medium-11 small-12 large-centered column">
                    <form onSubmit={this.onAddTodo }>
                        <div className="row">
                            <input type="text" ref="todo" placeholder="What do you need to do?"/>
                        </div>
                        <div className="row">
                            <button className="button expanded">Add Todo</button>
                        </div>
                    </form>
                </div>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleAddTodo: (text) => {
            dispatch(actions.startAddTodo(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);