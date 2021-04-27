import React, { useEffect } from 'react';

let urlKraken = `https://api.kraken.com/0/public/Ticker?pair=XBTUSDC`

function ExchangeKraken({krakenPrices, setKrakenPrices}) {

    // use useEffect to update state of `krakenPrices`
    useEffect(() => {
        fetch(urlKraken)
            .then(res => res.json())
            .then(data => {
                // define newPrice as 1st price in array `a`
                // TODO update krakenPrices with prices `a`, `b`, and `c`
                let newPrice = data.result.XBTUSDC.a[0]
                // update state
                setKrakenPrices(newPrice)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h5>XBTUSDC on Kraken</h5>
            <div className="krakenPrices">${krakenPrices}</div>
        </div>
    );
}

export default ExchangeKraken;
