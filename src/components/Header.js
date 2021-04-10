import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <a href="#">
                <b>DEEPAK </b>RAJAN <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021
                </a>
            </div>
            <div className="header-link">
                <ul>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Info</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;