import React from 'react'
import classes from './Gameboard.module.css'

const name = (props) => {
    
    return(            
        <button className={classes.Button} onClick={props.onClick}>{props.value}</button>            
    )
    
};

export default name

