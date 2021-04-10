import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <Link to="/">
                <b>DEEPAK </b>RAJAN <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021
                </Link>
            </div>
            <div className="nav-link">
                <ul>
                    <Link to="/">
                        <li>Work</li>
                    </Link>
                    <Link to="/">
                        <li>Art</li>
                    </Link>
                    <Link to="/archieve">
                        <li>Archieve</li>
                    </Link>
                    <Link to="/">
                        <li>Info</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Nav;