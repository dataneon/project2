import React, { useState } from 'react';
import ExchangeKraken from './APIs/ExchangeKraken';

function Dashboard(props) {
    const [krakenPrices, setKrakenPrices] = useState()

    console.log(`Dashboard has been loaded`)
    return (
        <div>
            <h4>Select coin</h4>
            [Dropdown menu]
            <ExchangeKraken krakenPrices={krakenPrices}
                            setKrakenPrices={setKrakenPrices}/>
        </div>
    );
}

export default Dashboard;