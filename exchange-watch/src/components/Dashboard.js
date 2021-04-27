import React, { useState } from 'react';
import ExchangeKraken from './APIs/ExchangeKraken';
import ExchangeCoinbase from './APIs/ExchangeCoinbase'

function Dashboard(props) {
    // create state for prices on Kraken
    // TODO create structure of useState
    const [krakenPrices, setKrakenPrices] = useState()

    // Define state for exchange B here
    const [coinbaseBTCPrice, setCoinbaseBTCPrice] = useState()

    // Define state for exchange C here

    
    return (
        <div>
            <h4>Select coin</h4>
            [Dropdown menu]
            <ExchangeKraken krakenPrices={krakenPrices}
                            setKrakenPrices={setKrakenPrices}/>
            <ExchangeCoinbase coinbaseBTCPrice={coinbaseBTCPrice}
                            setCoinbaseBTCPrice={setCoinbaseBTCPrice}/>
        </div>
    );
}

export default Dashboard;