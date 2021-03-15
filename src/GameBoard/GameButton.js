import React from 'react'
import classes from './Gameboard.module.css'

const name = (props) => {

    const tester = new Array(3).fill(0).map(() => new Array(3).fill(0))
    let num = 0;
    for(var i = 0; i < 3; i++){
        for (var j = 0; j <3; j++){
            tester[i][j] = <button  className={classes.Button}></button>
            num++
        }
    } 
    return(
        <div className={classes.emptyDiv}>
            {tester}
        </div>
    )
    
};

export default name

