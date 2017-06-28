import React, { Component } from 'react'
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        
            var { text, id, completedAt, isCompleted, createdAt, toggleTodo } = this.props;

        let striked = "";
        if (isCompleted) {
            striked = "todo-striked";
        }
        //defaultChecked={todo.isCompleted}
        var renderDate = () => {
            var mesasge = 'Created ';
            var timestamp = createdAt;

            return mesasge + moment
                .unix(timestamp)
                .format('MMM Do YYYY @ h:mm a');
        }
        return (
            
            <div
                className="row"
                onClick={(e) => {
                    e.preventDefault();
                    toggleTodo(id, !isCompleted);
            }}>
                <div className=" large-1 columns text-center">
                    <input
                        type="checkbox"
                        onChange={() => {}}
                        checked={isCompleted}
                        ref="isCompleted"/>
                </div>
                <div className=" large-11 columns text-left">
                    <p>
                        <span className={striked}>{text}</span>
                        <br/>
                        <span className="chkpanel">{renderDate()}</span>
                    </p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleTodo: (id, isCompleted) => {
            dispatch(actions.startUpdateTodo(id, isCompleted))
        }
    }
};
const mapStateToProps = (state, ownProps) => {
    return state;
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo);