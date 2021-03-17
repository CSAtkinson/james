import React, { useEffect, useState } from 'react'
import classes from './Gameboard.module.css'
import GameButton from './GameButton'

const GameBoard = ({gameButtons, onClick}) => ( 
    
        <div>
            <div className={classes.emptyDiv}></div>
            <div className={classes.emptyDiv}>
            {gameButtons.map((gameButton, i) => (
                <GameButton key={i} value={gameButton} onClick={()=> onClick(i)} />
            ))}           
            </div>
            <div className={classes.emptyDiv}></div>
            
        </div>
        
)


export default GameBoard




