import React, { useContext } from 'react';
import { DataContext } from './DataContext';

function Image() {
    // get menuState via useContext
    const {menuState, setMenu} = useContext(DataContext)
    let assetChoice = menuState.userChoice

    // default to Bitcoin if there is no selection
    if (assetChoice.length == 0) {assetChoice = "BTC"}

    if (assetChoice === "BTC") return (<div><img src={process.env.PUBLIC_URL + '/images/BTC.png'}/></div>)
    if (assetChoice === "ETH") return (<div><img src={process.env.PUBLIC_URL + '/images/ETH.png'}/></div>)
    if (assetChoice === "ADA") return (<div><img src={process.env.PUBLIC_URL + '/images/ADA.png'}/></div>)
    if (assetChoice === "LTC") return (<div><img src={process.env.PUBLIC_URL + '/images/LTC.png'}/></div>)
    if (assetChoice === "BCH") return (<div><img src={process.env.PUBLIC_URL + '/images/BCH.png'}/></div>)
    if (assetChoice === "LINK") return (<div><img src={process.env.PUBLIC_URL + '/images/LINK.png'}/></div>)
    if (assetChoice === "XLM") return (<div><img src={process.env.PUBLIC_URL + '/images/XLM.png'}/></div>)
    if (assetChoice === "XTZ") return (<div><img src={process.env.PUBLIC_URL + '/images/XTZ.png'}/></div>)
    else return null

     // let imgSRC = `/img/${assetChoice}.png`

    // return (
    //     <div>
    //         <img src={process.env.PUBLIC_URL + '/images/BTC.png'}/>
    //     </div>
    // );
}

export default Image;