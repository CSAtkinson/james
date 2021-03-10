import React, { Component } from 'react'
import classes from './Gameboard.module.css'
import BoardRow from './BoardRow/BoardRow'

 


class GameBoard  extends Component{
    render(){        

        const populateGameBoard = () => {
            let num = 0;
            for (var i = 0; i < 3; i++){
                for(var j = 0; j < 3; j++){
                    this.props.gameBoard[i][j] = num;
                    num++
                }
            }
        }

       
        return(
            <div className={classes.Gameboard}>
                <BoardRow />
                <BoardRow />
                <BoardRow />
            </div>
        ) 
    }
    
};




export default GameBoard
