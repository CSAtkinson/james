import React, { Component, useEffect, useState } from 'react'
import GameBoard from '../GameBoard/Gameboard'
import Auxillary from '../hoc/Auxillary/Auxillary'

const TicTacToe = () =>{
    const [gameBoard, setGameboard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(1)
     
    const handleClick = (i) => {
        const boardCopy = [...gameBoard]
        if( turn === 1){
            boardCopy[i] = 'X'
            setTurn(2)            
        }
        else {
            boardCopy[i] = 'O'
            setTurn(1)            
        }
        setGameboard(boardCopy)
        
    }

    const determineWinner = () => {
        if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') || (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O')){
           console.log("We have a winner!")
           setGameboard(Array(9).fill(null))
        }
        else if ((gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') || (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O')){
            console.log("We have a winner!")
            setGameboard(Array(9).fill(null))
        }
        else if ((gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') || (gameBoard[0] === 'OX' && gameBoard[4] === 'O' && gameBoard[8] === 'O')){
            console.log("We have a winner!")
            setGameboard(Array(9).fill(null))
        }
        else if ((gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') || (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O')){
            console.log("We have a winner!")
            setGameboard(Array(9).fill(null))
        }
        else if ((gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') || (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')){
            console.log("We have a winner!")
            setGameboard(Array(9).fill(null))
        }
        else if ((gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') || (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')){
            console.log("We have a winner!")
            setGameboard(Array(9).fill(null))
        }
        else if ((gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') || (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O')){
            console.log("We have a winner!")
            setGameboard(Array(9).fill(null))
        }
        else if ((gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') || (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')){
            console.log("We have a winner!")
            setGameboard(Array(9).fill(null))
        }
        
    }


    return(
        <Auxillary>
            <GameBoard gameButtons={gameBoard} onClick={handleClick}/>             
        </Auxillary>
    );
    
};



export default TicTacToe