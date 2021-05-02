import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div id="navReturn">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </div>
    );
}

export default Nav;