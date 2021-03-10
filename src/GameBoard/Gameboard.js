import React, { useState } from 'react'
import classes from './Gameboard.module.css'
import BoardRow from './BoardRow/BoardRow'
 


const GameBoard = () => {
        return(
            <div className={classes.Gameboard}>
                <BoardRow />
                <BoardRow />
                <BoardRow />
            </div>
        ) 
    
};

export default GameBoard