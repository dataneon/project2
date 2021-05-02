import React from 'react';
import { Route, Link } from 'react-router-dom'
import Dashboard from './Dashboard';

function Nav(props) {
    return (
        <div>
            <Link to="/">Dashboard</Link>
            <br/>
            <Link to="/About">About</Link>
        </div>
    );
}

export default Nav;