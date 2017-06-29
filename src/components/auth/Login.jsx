import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Login extends Component {
    render () {
        var { handleLoginClick } = this.props;
        return (
            <div>
                <h1 className="pae-title">Todo App</h1>
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout">
                            <h3>Login</h3>
                            <p>Some information about login </p>
                            <p>Login with github account</p>
                            <button className="button" onClick={(e) => {
                                    e.preventDefault();
                                    handleLoginClick();
                                }}>Login with GitHub</button>
                                <br/>
                                 <button className="button alert" onClick={(e) => {
                                    e.preventDefault();
                                    handleLoginClick();
                                }}>Login with Twitter</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleLoginClick: () => {
            dispatch(actions.startLogin());
        },
        handleTwitterLogin: () => {
            dispatch(actions.startTwitterLogin());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);