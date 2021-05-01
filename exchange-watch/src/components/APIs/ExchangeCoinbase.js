import React, { useContext, useEffect } from 'react';
import { DataContext } from '../DataContext';

function ExchangeCoinbase({coinbaseLastPrice, setCoinbaseLastPrice, coinbaseVolume, setCoinbaseVolume}) {

    // useContext brings in the menuState
    const {menuState, setMenuState} = useContext(DataContext)
    let assetChoice = menuState.userChoice

    // object to determine which ticker to retrieve
    let tickersObj = {
        BTC: "BTC-USD",
        ETH: "ETH-USD",
        ADA: "ADA-USD",
        LTC: "LTC-USD",
        BCH: "BCH-USD",
        LINK: "LINK-USD",
        XLM: "XLM-USD",
    }

    // default to Bitcoin if there is no selection
    if (assetChoice.length == 0) {
        assetChoice = "BTC"
    }

    // shorthand for selected ticker string
    let tickerStr = tickersObj[assetChoice]

    // build slug based on user's choice in the menu
    let newURL = `https://api.pro.coinbase.com/products/${tickerStr}/ticker`

    // useEffect updates state of `coinbasePrice` and `coinbaseVolume`
    useEffect(() => {
        fetch(newURL)
            .then(res => res.json())
            .then(jsonData => {
                // create new price and set it
                let newPrice = jsonData.price
                setCoinbaseLastPrice(newPrice)
            })
            .catch(err => {
                console.log(err)
            })
        fetch(newURL)
            .then(res => res.json())
            .then(jsonData => {
                // create new volume and set it
                let newVolume = jsonData.volume
                setCoinbaseVolume(newVolume)
            })
            .catch(err => {
                console.log(err)
            })
    }, [menuState])

    return (
        <div>
            <h4>Coinbase Pro</h4>
            <div className="coinbasePrices">Last price of {assetChoice}: ${coinbaseLastPrice}</div>
            {/* <div className="coinbaseVolume">24-hour volume in {tickerStr}: {coinbaseVolume}</div> */}
        </div>
    );
}

export default ExchangeCoinbase;
