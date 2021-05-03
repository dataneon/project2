import React from 'react';
import { Helmet } from 'react-helmet'

function Header() {
    return (
        <div id="headerReturn">
            <Helmet>
            <title>Exchange Watch</title>
            </Helmet>
            <h1>Exchange Watch</h1>
        </div>
    );
}

export default Header;