import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../DataContext'

function ExchangeCoinbase({infoButtonCoinbase}) {
    // useContext brings in the menuState
    const {menuState, setMenuState} = useContext(DataContext)
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
    }
    
    // default to Bitcoin if there is no selection
    if (assetChoice.length == 0) {assetChoice = "BTC"}

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

    // if-else statement determines how much information is displayed
    if (infoButtonCoinbase === false) {
        return (
            <div className="coinbaseReturn">
                <h4>Coinbase Pro</h4>
                <h5>{assetChoice}</h5>
                <p>Last price: ${lastPrice}</p>
            </div>
        )
    } else {
        return (
            <div className="coinbaseReturn">
                <h4>Coinbase Pro</h4>
                <h5>{assetChoice}</h5>
                <p>Last price: ${lastPrice}</p>
                <p>Ask price: ${askPrice}</p>
                <p>Bid price: ${bidPrice}</p>
                <p>Volume today in {tickerStr}: {volume} {assetChoice}</p>
                <p>Size of the last purchase: {sizeLastPurchase} {assetChoice}</p>
                <p>Time of the last purchase: {timeLastPurchase}</p>
            </div>
        )
    }
}

export default ExchangeCoinbase
