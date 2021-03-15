import React, { useState } from 'react'
import classes from './Gameboard.module.css'
import TttButton from './GameButton'

const GameBoard = (props) => { 
    

    const symbolChange = () => {

    }
    
    

    return(        
        <div className={classes.outerDiv}>
            <div className={classes.emptyDiv}></div>
            <TttButton click={symbolChange}/>            
            <div className={classes.emptyDiv}></div>
        </div>
    ) 
}


export default GameBoard




