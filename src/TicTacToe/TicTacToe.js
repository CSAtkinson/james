import React, { Component } from 'react'
import GameBoard from '../GameBoard/Gameboard'
import Auxillary from '../hoc/Auxillary/Auxillary'

class TicTacToe extends Component{
    constructor(props) {
        super(props);
        this.state = {
          gameBoard: Array(9).fill(null),
          turn: 1,
          winner: false
        };
      }

      handleClick = (i) => {
        const boardCopy = [...this.state.gameBoard]
        if (this.determineWinner()){return}
        if( this.state.turn === 1){
            boardCopy[i] = 'X'
            this.setState({turn: 2})            
        }
        else {
            boardCopy[i] = 'O'
            this.setState({turn: 1})                     
        }
        this.setState({gameBoard: boardCopy}, () => this.determineWinner())        
    }

    determineWinner(){
        if ((this.state.gameBoard[0] === 'X' && this.state.gameBoard[1] === 'X' && this.state.gameBoard[2] === 'X') || (this.state.gameBoard[0] === 'O' && this.state.gameBoard[1] === 'O' && this.state.gameBoard[2] === 'O')){
            console.log("WINNER!!!")
            this.setState({winner: true})
            return true;
        }
        else if ((this.state.gameBoard[0] === 'X' && this.state.gameBoard[3] === 'X' && this.state.gameBoard[6] === 'X') || (this.state.gameBoard[0] === 'O' && this.state.gameBoard[3] === 'O' && this.state.gameBoard[6] === 'O')){
            this.setState({winner: true})
            return true
        }
        else if ((this.state.gameBoard[0] === 'X' && this.state.gameBoard[4] === 'X' && this.state.gameBoard[8] === 'X') || (this.state.gameBoard[0] === 'OX' && this.state.gameBoard[4] === 'O' && this.state.gameBoard[8] === 'O')){
            this.setState({winner: true})
            return true
        }
        else if ((this.state.gameBoard[1] === 'X' && this.state.gameBoard[4] === 'X' && this.state.gameBoard[7] === 'X') || (this.state.gameBoard[1] === 'O' && this.state.gameBoard[4] === 'O' && this.state.gameBoard[7] === 'O')){
            this.setState({winner: true})
            return true
        }
        else if ((this.state.gameBoard[2] === 'X' && this.state.gameBoard[4] === 'X' && this.state.gameBoard[6] === 'X') || (this.state.gameBoard[2] === 'O' && this.state.gameBoard[4] === 'O' && this.state.gameBoard[6] === 'O')){
            this.setState({winner: true})
            return true
        }
        else if ((this.state.gameBoard[2] === 'X' && this.state.gameBoard[5] === 'X' && this.state.gameBoard[8] === 'X') || (this.state.gameBoard[2] === 'O' && this.state.gameBoard[5] === 'O' && this.state.gameBoard[8] === 'O')){
            this.setState({winner: true})
            return true
        }
        else if ((this.state.gameBoard[3] === 'X' && this.state.gameBoard[4] === 'X' && this.state.gameBoard[5] === 'X') || (this.state.gameBoard[3] === 'O' && this.state.gameBoard[4] === 'O' && this.state.gameBoard[5] === 'O')){
            this.setState({winner: true})
            return true
        }
        else if ((this.state.gameBoard[6] === 'X' && this.state.gameBoard[7] === 'X' && this.state.gameBoard[8] === 'X') || (this.state.gameBoard[6] === 'O' && this.state.gameBoard[7] === 'O' && this.state.gameBoard[8] === 'O')){
            this.setState({winner: true})
            return true
        }
        return false;
        
    }


    render(){
        return(
            <Auxillary>
                <GameBoard winner={this.state.winner} turn={this.state.turn} gameButtons={this.state.gameBoard} onClick={this.handleClick}/>             
            </Auxillary>
        )

        
    }

    
     
    

    


    
    
};



export default TicTacToe