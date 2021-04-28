import React, { useState } from 'react';
import ExchangeKraken from './APIs/ExchangeKraken';
import ExchangeCoinbase from './APIs/ExchangeCoinbase'
import ExchangeHuobi from './APIs/ExchangeHuobi'

// Individual Exchange is called when a user clicks on the button below the exchanges
import IndividualExchange from './IndividualExchange'

function Dashboard(props) {
    // create state for prices on Kraken
    // TODO create structure of useState
    const [krakenPrices, setKrakenPrices] = useState()

    // Create state for price on Coinbase
    const [coinbaseBTCPrice, setCoinbaseBTCPrice] = useState()

    // Define state for price on Huobi
    const [huobiBTCPrice, setHuobiBTCPrice] = useState()

    
    return (
        <div>
            <h4>Select coin</h4>
            [Dropdown menu]
            <ExchangeKraken     krakenPrices={krakenPrices}
                                setKrakenPrices={setKrakenPrices}/>
            <ExchangeCoinbase   coinbaseBTCPrice={coinbaseBTCPrice}
                                setCoinbaseBTCPrice={setCoinbaseBTCPrice}/>
            <ExchangeHuobi      huobiBTCPrice={huobiBTCPrice}
                                sethuobiBTCPrice={setHuobiBTCPrice}/>
        </div>
    );
}

export default Dashboard;
