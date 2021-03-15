import React, { useEffect, useState } from 'react'
import classes from './Gameboard.module.css'





const GameBoard = (props) => {
   
    const tester = new Array(3).fill(0).map(() => new Array(3).fill(0))
    const populate = () => {         
        let num = 0;
        for(var i = 0; i < 3; i++){
            for (var j = 0; j <3; j++){
                tester[i][j] = <button key={num} onClick={()=> setSymbol("O")} className={classes.Button}>X</button>
                num++
            }
        }        
    }

    const [symbol, setSymbol] = useState("X");
    const [turn, setTurn] = useState(1)
    const [button, setButton] = useState([])
    populate();
    console.log(tester)

    
    

    // useEffect(() => {
        
    // }, [])

    return(        
        <div className={classes.outerDiv}>
            <div className={classes.emptyDiv}></div>
            <div className={classes.emptyDiv}>
            {tester}
            </div>            
            <div className={classes.emptyDiv}></div>
        </div>
    ) 
}


export default GameBoard


//

