import React, { useEffect } from 'react';

let urlHuobi = `https://api.huobi.pro/market/detail/merged?symbol=btcusdt`

function ExchangeHuobi({huobiLastPrice, setHuobiLastPrice, huobiVolume, setHuobiVolume}) {

    // TODO refactor these two useEffect() calls down to one

    // useEffect updates state of `huobiLastPrice`
    useEffect(() => {
        fetch(urlHuobi)
            .then(res => res.json())
            .then(jsonData => {
                // define newPrice
                let newPrice = jsonData.tick.close
                setHuobiLastPrice(newPrice)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // useEffect updates state of `huobiVolume`
    useEffect(() => {
        fetch(urlHuobi)
            .then(res => res.json())
            .then(jsonData => {
                // define newVolume and set it
                let newVolume = jsonData.tick.vol
                setHuobiVolume(newVolume)
            })
    }, [])

    return (
        <div>
          <h5>BTCUSDT on Huobi</h5>  
          <div className="huobiLastPrice">Last price: ${huobiLastPrice}</div>
          <div className="huobiVolume">24-hour volume in USD: ${huobiVolume}</div>
        </div>
    );
}

export default ExchangeHuobi;
