import React, { useState } from 'react'
import GameButton from '../GameButton/GameButton'




const BoardRow = (props) => {    
    

    const sendData = () => {
        this.props.change(props.turn)
    }

    const changeTurn = (turn, symbol) => {
        
    }

    return (
        <div>
            <GameButton change={changeTurn} turn={props.turn} />
            <GameButton change={changeTurn} turn={props.turn} />
            <GameButton change={changeTurn} turn={props.turn} />            
        </div>
    )
    
};
export default BoardRow

//