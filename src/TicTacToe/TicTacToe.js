import React, { Component } from 'react'
import classes from './TicTacToe.module.css'
import GameBoard from '../GameBoard/Gameboard'

class TicTacToe extends Component{
    state = {
        playerTurn: 1,
        playerName: '',
        score: 0
    }


    render() {
        return(
            <div>
                <GameBoard />   
            </div>
        );
    }
};

export default TicTacToe