import React, { useContext } from 'react';
import { DataContext } from './DataContext';

function Image() {
    // get menuState via useContext
    const {menuState} = useContext(DataContext)
    let assetChoice = menuState.userChoice

    // default to Bitcoin if there is no selection
    if (assetChoice.length === 0) {assetChoice = "BTC"}

    // load image based on assetChoice
    if (assetChoice === "BTC") return (<div><img src={process.env.PUBLIC_URL + '/images/BTC.png'} alt="BTC logo"/></div>)
    if (assetChoice === "ETH") return (<div><img src={process.env.PUBLIC_URL + '/images/ETH.png'} alt="ETH logo"/></div>)
    if (assetChoice === "ADA") return (<div><img src={process.env.PUBLIC_URL + '/images/ADA.png'} alt="ADA logo"/></div>)
    if (assetChoice === "LTC") return (<div><img src={process.env.PUBLIC_URL + '/images/LTC.png'} alt="LTC logo"/></div>)
    if (assetChoice === "BCH") return (<div><img src={process.env.PUBLIC_URL + '/images/BCH.png'} alt="BCH logo"/></div>)
    if (assetChoice === "LINK") return (<div><img src={process.env.PUBLIC_URL + '/images/LINK.png'} alt="LINK logo"/></div>)
    if (assetChoice === "XLM") return (<div><img src={process.env.PUBLIC_URL + '/images/XLM.png'} alt="XLM logo"/></div>)
    if (assetChoice === "XTZ") return (<div><img src={process.env.PUBLIC_URL + '/images/XTZ.png'} alt="XTZ logo"/></div>)
    else return null
}

export default Image;