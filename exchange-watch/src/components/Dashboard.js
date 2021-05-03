import React, { useState, useContext } from 'react'
import ExchangeKraken from './APIs/ExchangeKraken'
import ExchangeCoinbase from './APIs/ExchangeCoinbase'
import ExchangeHuobi from './APIs/ExchangeHuobi'
import Image from './Image'
import { DataContext } from './DataContext'

function Dashboard(props) {
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
        if (buttonValue == "kraken") setInfoButtonKraken(!infoButtonKraken)
        if (buttonValue == "coinbase") setInfoButtonCoinbase(!infoButtonCoinbase)
        if (buttonValue == "huobi") setInfoButtonHuobi(!infoButtonHuobi)
    }

    return (
        <div>
            {/* <form onSubmit={handleSubmit}> */}
            <form id="assetMenu">
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
                    <option value='XTZ'>Tezos</option>
                </select>
                {/* <button type="submit">Go</button> */}
            </form>
            <DataContext.Provider value={{menuState, setMenuState}}>
                <Image />
                <div id="allBlocks">
                    <div id="coinbaseBlock">
                        <ExchangeCoinbase infoButtonCoinbase={infoButtonCoinbase}/>
                        <button value="coinbase" className="infoButtons" onClick={handleInfoClick}>
                            More information
                        </button>
                    </div>
                    <div id="huobiBlock">
                        <ExchangeHuobi infoButtonHuobi={infoButtonHuobi}/>
                        <button value="huobi" className="infoButtons" onClick={handleInfoClick}>
                            More information
                        </button>
                    </div>
                    <div id="krakenBlock">
                        <ExchangeKraken infoButtonKraken={infoButtonKraken}/>
                        <button value="kraken" className="infoButtons" onClick={handleInfoClick}>
                            More information
                        </button>
                    </div>
                </div>
            </DataContext.Provider>
        </div>
    );
}

export default Dashboard;
