import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../DataContext'

function ExchangeCoinbase({infoButtonCoinbase}) {
    // useContext brings in the menuState
    const {menuState} = useContext(DataContext)
    let assetChoice = menuState.userChoice

    // Create states for price, volume, etc.
    const [lastPrice, setLastPrice] = useState()
    const [sizeLastPurchase, setSizeLastPurchase] = useState()
    const [timeLastPurchase, setTimeLastPurchase] = useState()
    const [bidPrice, setBidPrice] = useState()
    const [askPrice, setAskPrice] = useState()
    const [volume, setVolume] = useState()

    // use object to determine which ticker to retrieve
    let tickersObj = {
        BTC: "BTC-USD",
        ETH: "ETH-USD",
        ADA: "ADA-USD",
        LTC: "LTC-USD",
        BCH: "BCH-USD",
        LINK: "LINK-USD",
        XLM: "XLM-USD",
        XTZ: "XTZ-USD"
    }
    
    // default to Bitcoin if there is no selection
    if (assetChoice.length === 0) {assetChoice = "BTC"}

    // shorthand for selected ticker string
    let tickerStr = tickersObj[assetChoice]

    // build slug based on the user's choice in the menu
    let newURL = `https://api.pro.coinbase.com/products/${tickerStr}/ticker`

    // fetch info
    useEffect(() => {
        fetch(newURL)
            .then(res => res.json())
            .then(jsonData => {
                // last price
                let newLastPrice = jsonData.price
                setLastPrice(newLastPrice)
                // size of last purchase
                let newSizeLastPurchase = jsonData.size
                setSizeLastPurchase(newSizeLastPurchase)
                // time of last purchase
                let newTimeLastPurchase = jsonData.time
                setTimeLastPurchase(newTimeLastPurchase)
                // bid price
                let newBidPrice = jsonData.bid
                setBidPrice(newBidPrice)
                // ask price
                let newAskPrice = jsonData.ask
                setAskPrice(newAskPrice)
                // volume
                let newVolume = jsonData.volume
                setVolume(newVolume)
            })
            .catch(err => {
                console.log(err)
            })
    }, [menuState])

    // determine how much info to display via if-else statement
    if (infoButtonCoinbase === false) {
        return (
            <div id="coinbaseReturn" className="APIReturns">
                <h2 className="blockHeaders">Coinbase Pro</h2>
                <div className="blockText">
                        <p>Last price: ${lastPrice}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div id="coinbaseReturn" className="APIReturns">
                <h2 className="blockHeaders">Coinbase Pro</h2>
                <div className="blockText">
                    <ul>
                        <li>Last price: ${lastPrice}</li>
                        <li>Ask price: ${askPrice}</li>
                        <li>Bid price: ${bidPrice}</li>
                        <li>Volume today in {tickerStr}: {volume} {assetChoice}</li>
                        <li>Size of last purchase: {sizeLastPurchase} {assetChoice}</li>
                        <li>Time of last purchase: {timeLastPurchase}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ExchangeCoinbase
