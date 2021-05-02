import React, { useEffect, useContext } from 'react';
import { DataContext } from '../DataContext'

function OldExchangeKraken({krakenLastPrice, setKrakenLastPrice, krakenVolume, setKrakenVolume}) {

    // useContext brings in the menuState
    const {menuState, setMenuState} = useContext(DataContext)
    let assetChoice = menuState.userChoice

    // use object to determine which ticker to retrieve
    let tickersObj = {
        BTC: "XBTUSDC",
        ETH: "ETHUSDC",
        ADA: "ADAUSD",
        LTC: "XLTCZUSD",
        BCH: "BCHUSD",
        LINK: "LINKUSD",
        XLM: "XXLMZUSD",
    }

    // default to Bitcoin if there is no selection
    if (assetChoice.length == 0) {assetChoice = "BTC"}

    // shorthand for selected ticker string
    let tickerStr = tickersObj[assetChoice]

    // build slug based on the user's choice in the menu
    let newURL = `https://api.kraken.com/0/public/Ticker?pair=${tickerStr}`

    // fetch price and volume
    useEffect(() => {
        fetch(newURL)
            .then(res => res.json())
            .then(jsonData => {
                // define newPrice
                let newLastPrice = jsonData.result[tickerStr].c[0]
                setKrakenLastPrice(newLastPrice)
            })
            .catch(err => {
                console.log(err)
            })
        fetch(newURL)
            .then(res => res.json())
            .then(jsonData => {
                // define newVolume
                // TODO trim number down to 2 decimals
                // OR TODO convert volume to USD
                let newVolume = jsonData.result[tickerStr].v[1]
                setKrakenVolume(newVolume)
            })
            .catch(err => {
                console.log(err)
            })
    }, [menuState])

    return (
        <div>
            <h4>Kraken</h4>
            <div className="krakenLastPrice">Last price of {assetChoice}: ${krakenLastPrice}</div>
            {/* <div className="krakenVolume">24-hour volume in {tickerStr}: {krakenVolume}</div> */}
        </div>
    );
}

export default OldExchangeKraken;
