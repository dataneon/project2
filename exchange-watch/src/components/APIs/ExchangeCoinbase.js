import React, { useEffect } from 'react';

let urlCoinbase = `https://api.coinbase.com/v2/prices/spot?currency=USD`

function ExchangeCoinbase({coinbaseBTCPrice, setCoinbaseBTCPrice}) {

    // useEffect updates state of `coinbasePrice`
    useEffect(() => {
        fetch(urlCoinbase)
            .then(res => res.json())
            .then(jsonData => {
                // create new price and set it
                let newBTCPrice = jsonData.data.amount
                setCoinbaseBTCPrice(newBTCPrice)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h5>BTCUSD on Coinbase</h5>
            <div className="coinbasePrices">${coinbaseBTCPrice}</div>
        </div>
    );
}

export default ExchangeCoinbase;
