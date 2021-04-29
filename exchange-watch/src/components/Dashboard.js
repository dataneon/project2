import React, { useState } from 'react';
import ExchangeKraken from './APIs/ExchangeKraken';
import ExchangeCoinbase from './APIs/ExchangeCoinbase'
import ExchangeHuobi from './APIs/ExchangeHuobi'

// Individual Exchange is called when a user clicks on the button below the exchanges
import IndividualExchange from './IndividualExchange'

function Dashboard(props) {
    // TODO create structure of useState
    let stateTemplate = {lastPrice: 0, volume: 0}

    // create states for price and volume on Kraken
    const [krakenLastPrice, setKrakenLastPrice] = useState()
    const [krakenVolume, setKrakenVolume] = useState()

    // Create states for price and volume on Coinbase Pro
    const [coinbaseLastPrice, setCoinbaseLastPrice] = useState()
    const [coinbaseVolume, setCoinbaseVolume] = useState()

    // Create state for price on Huobi
    const [huobiLastPrice, setHuobiLastPrice] = useState()
    const [huobiVolume, setHuobiVolume] = useState()

    return (
        <div>
            <h4>Select coin</h4>
            <select>
                <option value=''>Bitcoin</option>
                <option value=''>Ethereum</option>
                <option value=''>Cardano</option>
                <option value=''>Uniswap</option>
                <option value=''>Litecoin</option>
                <option value=''>Bitcoin Cash</option>
                <option value=''>Chainlink</option>
                <option value=''>Stellar Lumens</option>
                <option value=''>Filecoin</option>
                <option value=''>Aave</option>
            </select>
            <ExchangeKraken     krakenLastPrice={krakenLastPrice}
                                setKrakenLastPrice={setKrakenLastPrice}
                                krakenVolume={krakenVolume}
                                setKrakenVolume={setKrakenVolume}/>
            <ExchangeCoinbase   coinbaseLastPrice={coinbaseLastPrice}
                                setCoinbaseLastPrice={setCoinbaseLastPrice}
                                coinbaseVolume={coinbaseVolume}
                                setCoinbaseVolume={setCoinbaseVolume}/>
            <ExchangeHuobi      huobiLastPrice={huobiLastPrice}
                                setHuobiLastPrice={setHuobiLastPrice}
                                huobiVolume={huobiVolume}
                                setHuobiVolume={setHuobiVolume}
                                />
        </div>
    );
}

export default Dashboard;
