import React, { useEffect } from 'react';

let urlKraken = `https://api.kraken.com/0/public/Ticker?pair=XBTUSDC`

function ExchangeKraken({krakenLastPrice, setKrakenLastPrice, krakenVolume, setKrakenVolume}) {

    // TODO refactor these two useEffect() calls into one by updating one state instead of two

    // use useEffect to update state of `krakenLastPrice`
    useEffect(() => {
        fetch(urlKraken)
            .then(res => res.json())
            .then(jsonData => {
                // define newPrice
                let newLastPrice = jsonData.result.XBTUSDC.c[0]
                setKrakenLastPrice(newLastPrice)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // use useEffect to update state of `krakenVolume`
    useEffect(() => {
        fetch(urlKraken)
            .then(res => res.json())
            .then(jsonData => {
                // define newVolume
                let newVolume = jsonData.result.XBTUSDC.v[1]
                setKrakenVolume(newVolume)
            })
    }, [])

    return (
        <div>
            <h5>XBTUSDC on Kraken</h5>
            <div className="krakenLastPrice">Last price: ${krakenLastPrice}</div>
            <div className="krakenVolume">24-hour volume in Bitcoin: {krakenVolume}</div>
        </div>
    );
}

export default ExchangeKraken;
