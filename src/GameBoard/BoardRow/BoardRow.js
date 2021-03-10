import React, { useState } from 'react'
import GameButton from './GameButton/GameButton'




const BoardRow = (props) => {    
    

    
    return (
        <div>
            <GameButton turn={props.turn} />
            <GameButton turn={props.turn} />
            <GameButton turn={props.turn} />            
        </div>
    )
    
};
export default BoardRow

//