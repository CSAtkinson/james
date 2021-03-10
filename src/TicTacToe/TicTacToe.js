import React, { Component, useEffect } from 'react'
import GameBoard from '../GameBoard/Gameboard'
import * as actionTypes from '../store/actions/actionTypes'
import { connect } from 'react-redux'

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