import React, { useEffect } from 'react';

let urlKraken = `https://api.kraken.com/0/public/Ticker?pair=XBTUSDC`

function ExchangeKraken({krakenPrices, setKrakenPrices}) {

    useEffect(() => {
        fetch(urlKraken)
            .then(res => res.json())
            .then(data => {
                let newPrice = data.result.XBTUSDC.a[0]
                setKrakenPrices(newPrice)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h5>XBTUSDC on Kraken</h5>
            <div className="krakenPrices">{krakenPrices}</div>
        </div>
    );
}

export default ExchangeKraken;