import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../DataContext'

function ExchangeKraken({infoButtonKraken}) {
    // useContext brings in the menuState
    const {menuState} = useContext(DataContext)
    let assetChoice = menuState.userChoice

    // Create states for price, volume, etc.
    const [askPrice, setAskPrice] = useState()
    const [bidPrice, setBidPrice] = useState()
    const [LastPrice, setLastPrice] = useState()
    const [volumeToday, setVolumeToday] = useState()
    const [volumeLast24HR, setVolumeLast24HR] = useState()
    const [averagePriceToday, setAveragePriceToday] = useState()
    const [averagePriceLast24HR, setAveragePriceLast24HR] = useState()
    const [tradesToday, setTradesToday] = useState()
    const [tradesLast24HR, setTradesLast24HR] = useState()
    const [lowToday, setLowToday] = useState()
    const [lowLast24HR, setLowLast24HR] = useState()
    const [highToday, setHighToday] = useState()
    const [highLast24HR, setHighLast24HR] = useState()
    const [openingPrice, setOpeningPrice] = useState()

    // use object to determine which ticker to retrieve
    let tickersObj = {
        BTC: "XBTUSDC",
        ETH: "ETHUSDC",
        ADA: "ADAUSD",
        LTC: "XLTCZUSD",
        BCH: "BCHUSD",
        LINK: "LINKUSD",
        XLM: "XXLMZUSD",
        XTZ: "XTZUSD",
    }

    // default to Bitcoin if there is no selection
    if (assetChoice.length === 0) {assetChoice = "BTC"}

    // shorthand for selected ticker string
    let tickerStr = tickersObj[assetChoice]

    // build slug based on the user's choice in the menu
    let newURL = `https://api.kraken.com/0/public/Ticker?pair=${tickerStr}`

    // fetch info
    useEffect(() => {
        fetch(newURL)
        .then(res => res.json())
        .then(jsonData => {
            // ask price
            let newAskPrice = jsonData.result[tickerStr].a[0]
            setAskPrice(newAskPrice)
            // bid price
            let newBidPrice = jsonData.result[tickerStr].b[0]
            setBidPrice(newBidPrice)
            // last price
            let newLastPrice = jsonData.result[tickerStr].c[0]
            setLastPrice(newLastPrice)
            // volume today
            let newVolumeToday = jsonData.result[tickerStr].v[0]
            setVolumeToday(newVolumeToday)
            // volume last 24 hours
            let newVolumeLast24HR = jsonData.result[tickerStr].v[1]
            setVolumeLast24HR(newVolumeLast24HR)
            // Average price today
            let newAveragePriceToday = jsonData.result[tickerStr].p[0]
            setAveragePriceToday(newAveragePriceToday)
            // Average price last 24 hours
            let newAveragePriceLast24HR = jsonData.result[tickerStr].p[1]
            setAveragePriceLast24HR(newAveragePriceLast24HR)
            // number of trades today
            let newTradesToday = jsonData.result[tickerStr].t[0]
            setTradesToday(newTradesToday)
            // number of trades last 24 hours
            let newTradesLast24HR = jsonData.result[tickerStr].t[1]
            setTradesLast24HR(newTradesLast24HR)
            // low price today
            let newLowToday = jsonData.result[tickerStr].l[0]
            setLowToday(newLowToday)
            // low price last 24 hr
            let newLowLast24HR = jsonData.result[tickerStr].l[1]
            setLowLast24HR(newLowLast24HR)
            // high price today
            let newHighToday = jsonData.result[tickerStr].h[0]
            setHighToday(newHighToday)
            // high price last 24 hr
            let newHighLast24HR = jsonData.result[tickerStr].h[1]
            setHighLast24HR(newHighLast24HR)
            // opening price
            let newOpeningPrice = jsonData.result[tickerStr].o
            setOpeningPrice(newOpeningPrice)
        })
        .catch(err => {
            console.log(err)
        })
    }, [menuState])

    // determine how much info to display via if-else statement
    if (infoButtonKraken === false) {
        return (
            <div id="krakenReturn" className="APIReturns">
                <h2 className="blockHeaders">Kraken</h2>
                <div className="blockText">
                    <p>Last price: ${LastPrice}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div id="krakenReturn" className="APIReturns">
                <h2 className="blockHeaders">Kraken</h2>
                <div className="blockText">
                    <ul>
                        <li>Last price: ${LastPrice}</li>
                        <li>Ask price: ${askPrice}</li>
                        <li>Bid price: ${bidPrice}</li>
                        <li>Volume today in {tickerStr}: {volumeToday} {assetChoice}</li>
                        <li>Volume of last 24 hours: {volumeLast24HR} {assetChoice}</li>
                        <li>Average price today: ${averagePriceToday}</li>
                        <li>Average price of last 24 hours: ${averagePriceLast24HR}</li>
                        <li>Trades today: {tradesToday}</li>
                        <li>Trades over the last 24 hours: {tradesLast24HR}</li>
                        <li>Today's low: ${lowToday}</li>
                        <li>Low over the last 24 hours: ${lowLast24HR}</li>
                        <li>Today's high: ${highToday}</li>
                        <li>High over the last 24 hours: {highLast24HR}</li>
                        <li>Today's opening price: ${openingPrice}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ExchangeKraken;
