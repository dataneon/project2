import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../DataContext'

function ExchangeHuobi({infoButtonHuobi}) {
    // get menuState via useContext
    const {menuState, setMenu} = useContext(DataContext)
    let assetChoice = menuState.userChoice

    // create states for price, volume, etc.
    const [lastPrice, setLastPrice] = useState()
    const [openingPrice, setOpeningPrice] = useState()
    const [highToday, setHighToday] = useState()
    const [tradesToday, setTradesToday] = useState()
    const [lowToday, setLowToday] = useState()
    const [askPrice, setAskPrice] = useState()
    const [bidPrice, setBidPrice] = useState()
    const [volume, setVolume] = useState()

    // use object to determine which ticker to retrieve
    let tickersObj = {
        BTC: "btcusdt",
        ETH: "ethusdt",
        ADA: "adausdt",
        LTC: "ltcusdt",
        BCH: "bchusdt",
        LINK: "linkusdt",
        XLM: "xlmusdt",
        XTZ: "xtzusdt",
    }

    // default to Bitcoin if there is no selection
    if (assetChoice.length == 0) {assetChoice = "BTC"}

    // shorthand for selected ticker string
    let tickerStr = tickersObj[assetChoice]

    // build slug based on user's choice in the menu
    let newURL = `https://api.huobi.pro/market/detail/merged?symbol=${tickerStr}`

    useEffect(() => {
        fetch(newURL)
        .then(res => res.json())
        .then(jsonData => {
            // last price
            let newLastPrice = jsonData.tick.close
            setLastPrice(newLastPrice)
            // opening price
            let newOpeningPrice = jsonData.tick.open
            setOpeningPrice(newOpeningPrice)
            // high today
            let newHighPrice = jsonData.tick.high
            setHighToday(newHighPrice)
            // number of trades
            let newTradesToday = jsonData.tick.count
            setTradesToday(newTradesToday)
            // low today
            let newLowToday = jsonData.tick.low
            setLowToday(newLowToday)
            // ask price
            let newAskPrice = jsonData.tick.ask[0]
            setAskPrice(newAskPrice)
            // bid price
            let newBidPrice = jsonData.tick.bid[0]
            setBidPrice(newBidPrice)
            // volume
            let newVolume = jsonData.tick.vol
            setVolume(newVolume)
        })
        .catch(err => {
            console.log(err)
        })
    }, [menuState])

    // determine how much info to display via if-else statement
    if (infoButtonHuobi === false) {
        return (
            <div id="huobiReturn" className="APIReturns">
                <h2 class="blockHeaders">Huobi: {assetChoice}</h2>
                <div class="blockText">
                    <p>Last price: ${lastPrice}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div id="huobiReturn" className="APIReturns">
                <h2 class="blockHeaders">Huobi: {assetChoice}</h2>
                <div class="blockText">
                    <ul>
                        <li>Last price: ${lastPrice}</li>
                        <li>Ask price: ${askPrice}</li>
                        <li>Bid price: ${bidPrice}</li>
                        <li>Volume today: ${volume}</li>
                        <li>Trades today: {tradesToday}</li>
                        <li>Today's opening price: ${openingPrice}</li>
                        <li>Today's high: ${highToday}</li>
                        <li>Today's low: ${lowToday}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ExchangeHuobi;