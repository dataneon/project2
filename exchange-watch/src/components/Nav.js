import React from 'react';
import { Link } from 'react-router-dom'

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