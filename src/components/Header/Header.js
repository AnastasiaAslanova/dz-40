import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

function Header () {

    return(
        <div className="header">
            <div className="logo"></div>
            <div className="header-name">
                Blog name
            </div>
                <ul className="menu">
                    <li className="menu-item">
                        <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? "active" : null}>
                        Home Page
                    </NavLink></li>
                    <li className="menu-item">
                        <NavLink to='contact'>Contact Page</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to='news'>News Page</NavLink>
                    </li>
                    <li className="menu-item"></li>
                    <li className="menu-item"></li>
                </ul>
        </div>
    )
}

export default Header;