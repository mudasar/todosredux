import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Home from './Home';

class Header extends Component {
    render () {
        return (
           <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">React + Redux</li>
                        <li>
                            <NavLink to="/" exact activeClassName="button">Home</NavLink>
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
                            <button className="button">Logout</button>
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

export default Header;