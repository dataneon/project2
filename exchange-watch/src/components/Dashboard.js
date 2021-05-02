import React, { useState, useContext } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import ExchangeKraken from './APIs/ExchangeKraken'
// import OldExchangeCoinbase from './APIs/OldExchangeCoinbase'
import ExchangeCoinbase from './APIs/ExchangeCoinbase'
// import OldExchangeHuobi from './APIs/OldExchangeHuobi'
import { DataContext } from './DataContext'

function Dashboard(props) {
    // Create state for price on Huobi
    const [huobiLastPrice, setHuobiLastPrice] = useState()
    const [huobiVolume, setHuobiVolume] = useState()

    // define state for selected cryptocurrency from dropdown menu
    const initialMenuState = {userChoice: ''}
    const [menuState, setMenuState] = useState(initialMenuState)

    // Set state after change in dropdown menu and prevent default behavior of menu
    function handleChange(event) {
        setMenuState({...menuState, userChoice: event.target.value})
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     // setMenuState(initialMenuState)
    // }

    // Create state for additional-information buttons
    const [infoButtonKraken, setInfoButtonKraken] = useState(false)
    const [infoButtonCoinbase, setInfoButtonCoinbase] = useState(false)
    const [infoButtonHuobi, setInfoButtonHuobi] = useState(false)

    // Set state after more-info button click
    function handleInfoClick(event) {
        event.preventDefault()
        let buttonValue = event.target.value
        console.log(`infobuttonclick event: ${buttonValue}`)
        if (buttonValue == "kraken") setInfoButtonKraken(!infoButtonKraken)
        if (buttonValue == "coinbase") setInfoButtonCoinbase(!infoButtonCoinbase)
        if (buttonValue == "huobi") setInfoButtonHuobi(!infoButtonHuobi)
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                {/* <label htmlFor="coinChoice"></label> */}
                <select id="userChoice" onChange={handleChange} value={menuState.userChoice}>
                    <option value="">Choose asset</option>
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
                <ExchangeKraken infoButtonKraken={infoButtonKraken}/>
                    <button value="kraken" onClick={handleInfoClick}>More information</button>
                <ExchangeCoinbase infoButtonCoinbase={infoButtonCoinbase}/>
                    <button value="coinbase" onClick={handleInfoClick}>More information</button>
                {/* <OldExchangeHuobi      huobiLastPrice={huobiLastPrice}
                                    setHuobiLastPrice={setHuobiLastPrice}
                                    huobiVolume={huobiVolume}
                                    setHuobiVolume={setHuobiVolume}/>
                    <button value="huobi" onClick={handleInfoClick}>More information</button> */}
            </DataContext.Provider>
        </div>
    );
}

export default Dashboard;
