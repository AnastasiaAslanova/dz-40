import React from 'react';
import './../App/App.scss';
import './Header.scss'

function Header () {

    return(
        <div className="header">
            <div className="logo"></div>
            <div className="header-name">
                Blog name
            </div>
                <ul className="menu">
                    <li className="menu-item"></li>
                    <li className="menu-item"></li>
                    <li className="menu-item"></li>
                    <li className="menu-item"></li>
                    <li className="menu-item"></li>
                </ul>
        </div>
    )
}

export default Header;