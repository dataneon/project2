import React, { useEffect } from 'react';

let urlCoinbase = `https://api.pro.coinbase.com/products/BTC-USD/ticker`

function ExchangeCoinbase({coinbaseLastPrice, setCoinbaseLastPrice, coinbaseVolume, setCoinbaseVolume}) {

    // TODO refactor thse two useEffect() calls down to one

    // useEffect updates state of `coinbasePrice`
    useEffect(() => {
        fetch(urlCoinbase)
            .then(res => res.json())
            .then(jsonData => {
                // create new price and set it
                let newPrice = jsonData.price
                setCoinbaseLastPrice(newPrice)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // useEffect updates state of `coinbaseVolume`
    useEffect(() => {
        fetch(urlCoinbase)
            .then(res => res.json())
            .then(jsonData => {
                // create new volume and set it
                let newVolume = jsonData.volume
                setCoinbaseVolume(newVolume)
            })
    }, [])

    return (
        <div>
            <h5>BTCUSD on Coinbase Pro</h5>
            <div className="coinbasePrices">Last price: ${coinbaseLastPrice}</div>
            <div className="coinbaseVolume">24-hour volume in Bitcoin: {coinbaseVolume}</div>
        </div>
    );
}

export default ExchangeCoinbase;
