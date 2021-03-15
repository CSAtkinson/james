import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Gameboard.module.css'
import BoardRow from './BoardRow/BoardRow'
import * as actionTypes from '../store/actions/actionTypes'

 


const GameBoard = (props) => {
  
    

    // const populate = Object.keys(props.gameBoard[i][j])
    // .map(gameKey => {
    //     return( 
    //         <button onClick={changeSymbol} className={classes.Button}>{state.symbol}</button>
    //     );
    //  });

    
    return(
        <div className={classes.Gameboard}>
            <button onClick={props.onTurn} className={classes.Button}>{props.symbol}</button>
        </div>
    ) 
}

    


const mapStateToProps = state => {
    return{
        turn: state.playerTurn,
        symbol: state.playerSymbol,
        gameBoard: state.gameBoard
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onTurn: () => dispatch({type: actionTypes.CHANGE_TURN}),
        onSymbolChange: () => dispatch({type: actionTypes.CHANGE_SYMBOL}),
        populate: () => dispatch({type: actionTypes.POP_GAMEBOARD})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)





