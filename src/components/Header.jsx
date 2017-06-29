import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        const { handleLogout } = this.props;
        return (
           <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">React + Redux</li>
                        <li>
                            <NavLink to="/home" exact activeClassName="button">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/todos" activeClassName="button">Todos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="button">About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" activeClassName="button">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <button className="button" onClick={(e) => {e.preventDefault(); handleLogout();} }>Logout</button>
                        </li>
                        <li>
                            <input type="search" placeholder="Search" /></li>
                            <li>
                                <button type="button" className="button">Search</button>
                            </li>
                        </ul>
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
        handleLogout: () => {
            dispatch(actions.startLogout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
