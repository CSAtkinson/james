import React, { Component, useEffect } from 'react'
import GameBoard from '../GameBoard/Gameboard'

class TicTacToe extends Component{
    
    render() { 
        return(
            <div>
                <GameBoard />   
            </div>
        );
    }
};



export default TicTacToe