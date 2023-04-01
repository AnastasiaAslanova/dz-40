import React from 'react';
import './../App/App.scss';
import './Aside.scss'

function Aside () {

    return(
        <div className="aside">
            <div className="aside-name">
                News
            </div>
            <ul className="aside-menu">
                <li className="aside-item"></li>
                <li className="aside-item"></li>
                <li className="aside-item"></li>
            </ul>
        </div>
    )
}

export default Aside;