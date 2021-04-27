import React, { useEffect } from 'react';

let urlCoinbase = `https://api.coinbase.com/v2/prices/spot?currency=USD`

function ExchangeCoinbase({coinbaseBTCPrice, setCoinbaseBTCPrice}) {

    // useEffect updates state of `coinbasePrice`
    useEffect(() => {
        fetch(urlCoinbase)
            .then(res => res.json())
            .then(data => {
                let newBTCPrice = data.data.amount
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