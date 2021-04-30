import React, { useState, useContext } from 'react';
import ExchangeKraken from './APIs/ExchangeKraken';
import ExchangeCoinbase from './APIs/ExchangeCoinbase'
import ExchangeHuobi from './APIs/ExchangeHuobi'

import { DataContext } from './DataContext'

// Individual Exchange is called when a user clicks on the button below the exchanges
import IndividualExchange from './IndividualExchange'

function Dashboard(props) {
    // TODO create structure of useState
    const stateTemplate = {lastPrice: 0, volume: 0}

    // create states for price and volume on Kraken
    const [krakenLastPrice, setKrakenLastPrice] = useState()
    const [krakenVolume, setKrakenVolume] = useState()

    // Create states for price and volume on Coinbase Pro
    const [coinbaseLastPrice, setCoinbaseLastPrice] = useState()
    const [coinbaseVolume, setCoinbaseVolume] = useState()

    // Create state for price on Huobi
    const [huobiLastPrice, setHuobiLastPrice] = useState()
    const [huobiVolume, setHuobiVolume] = useState()

    // global variable to indicate the selected cryptocurrency
    const initialMenuState = {userChoice: ''}
    const [menuState, setMenuState] = useState(initialMenuState)

    // an attempt at just using a global string
    let menuString = ''

    const handleChange = (event) => {
        setMenuState({...menuState, userChoice: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(`User choice: ${menuState.userChoice}`)
        // setMenuState(initialMenuState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="coinChoice"></label>
                <select id="userChoice" onChange={handleChange} value={menuState.userChoice}>
                    <option value="none">Choose asset</option>
                    <option value="BTC">Bitcoin</option>
                    <option value="ETH">Ethereum</option>
                    <option value='ADA'>Cardano</option>
                    <option value='LTC'>Litecoin</option>
                    <option value='BCH'>Bitcoin Cash</option>
                    <option value='LINK'>Chainlink</option>
                    <option value='XLM'>Stellar Lumens</option>
                </select>
                {/* <button type="submit">Go</button> */}
            </form>

            <DataContext.Provider value={{menuState, setMenuState}}>
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
            </DataContext.Provider>
        </div>
    );
}

export default Dashboard;
