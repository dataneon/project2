import React, { useContext } from 'react';
import { DataContext } from './DataContext';

function Image() {
    // get menuState via useContext
    const {menuState, setMenu} = useContext(DataContext)
    let assetChoice = menuState.userChoice

    


    return (
        <div>
            
        </div>
    );
}

export default Image;