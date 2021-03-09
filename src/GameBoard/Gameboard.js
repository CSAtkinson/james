import React, { useState } from 'react'
import classes from './Gameboard.module.css'
import BoardRow from './BoardRow/BoardRow'
 


const GameBoard = () => {

    const [playerTurn, setPlayerTurn] = useState(1);
    const [playerSymbol, setPlayerSymbol] = useState();   
     

    const changeTurn = (turn, symbol) => {
        setPlayerTurn(turn)
        setPlayerSymbol(symbol)
    }
    
    
        return(
            <div className={classes.Gameboard}>
                <BoardRow 
                    turn={playerTurn}
                    change={changeTurn}                
                />
                <BoardRow                    
                    turn={playerTurn}
                    change={changeTurn}                   
                />
                <BoardRow               
                    turn={playerTurn}
                    change={changeTurn}
                />
            </div>
        ) 
    
};

export default GameBoard