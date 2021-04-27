import React, { useState } from 'react';
import ExchangeKraken from './APIs/ExchangeKraken';

function Dashboard(props) {
    // create state for prices on Kraken
    // TODO create structure of useState
    const [krakenPrices, setKrakenPrices] = useState()

    // Define state for exchange B here


    // Define state for exchange C here

    
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