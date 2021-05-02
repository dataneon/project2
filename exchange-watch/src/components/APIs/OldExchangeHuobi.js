import React, { useContext, useEffect } from 'react';
import { DataContext } from '../DataContext'

function OldExchangeHuobi({huobiLastPrice, setHuobiLastPrice, huobiVolume, setHuobiVolume}) {

    // useContext brings in the menuState
    const {menuState, setMenuState} = useContext(DataContext)
    let assetChoice = menuState.userChoice

    // use object to determine which ticker to retrieve
    let tickersObj = {
        BTC: "btcusdt",
        ETH: "ethusdt",
        ADA: "adausdt",
        LTC: "ltcusdt",
        BCH: "bchusdt",
        LINK: "linkusdt",
        XLM: "xlmusdt",
    }

    // default to Bitcoin if there is no selection
    if (assetChoice.length == 0) {
        assetChoice = "BTC"
    }

    // shorthand for selected ticker string
    let tickerStr = tickersObj[assetChoice]

    // build slug based on user's choice in the menu
    let newURL = `https://api.huobi.pro/market/detail/merged?symbol=${tickerStr}`

    // useEffect updates state of `huobiLastPrice`
    useEffect(() => {
        fetch(newURL)
            .then(res => res.json())
            .then(jsonData => {
                // define newPrice and set it
                let newPrice = jsonData.tick.close
                setHuobiLastPrice(newPrice)
            })
            .catch(err => {
                console.log(err)
            })
        fetch(newURL)
            .then(res => res.json())
            .then(jsonData => {
                // define newVolume and set it
                let newVolume = jsonData.tick.vol
                setHuobiVolume(newVolume)
            })
            .catch(err => {
                console.log(err)
            })
    }, [menuState])

    return (
        <div>
          <h4>Huobi</h4>  
          <div className="huobiLastPrice">Last price of {assetChoice}: ${huobiLastPrice}</div>
          {/* <div className="huobiVolume">24-hour volume in USD: ${huobiVolume}</div> */}
        </div>
    );
}

export default OldExchangeHuobi;
