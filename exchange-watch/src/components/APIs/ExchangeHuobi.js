import React, { useEffect } from 'react';

let urlHuobi = `https://api.huobi.pro/market/detail/merged?symbol=btcusdt`

function ExchangeHuobi({huobiBTCPrice, sethuobiBTCPrice}) {

    // useEffect updates state of `huobiBTCPrice`
    useEffect(() => {
        fetch(urlHuobi)
            .then(res => res.json())
            .then(jsonData => {
                // define newPrice
                let newPrice = jsonData.tick.close
                sethuobiBTCPrice(newPrice)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
          <h5>BTCUSDT on Huobi</h5>  
          <div className="huobiBTCPrice">${huobiBTCPrice}</div>
        </div>
    );
}

export default ExchangeHuobi;