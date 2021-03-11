import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Gameboard.module.css'
import BoardRow from './BoardRow/BoardRow'
import * as actionTypes from '../store/actions/actionTypes'

 


class GameBoard  extends Component{

    componentDidMount(){
        //this.populateGameBoard()
    }

    // populateGameBoard(){
    //     let num = 0;
    //     for (var i = 0; i < 3; i++){
    //         for(var j = 0; j < 3; j++){
    //             this.props.gameBoard[i][j] = num;
    //             num++
    //         }
    //     }
    // }


    render(){
        
        const changeSymbol = () => {            
            console.log('Global State Turn ' + this.props.turn)
            console.log('Global State Symbol ' + this.props.symbol)                          
            this.props.onTurn();
            this.props.onSymbolChange();
            console.log(this.props.turn + ' ' + this.props.symbol)
        }

        // const populate = Object.keys(this.props.gameBoard[i][j])
        // .map(gameKey => {
        //     return( 
        //         <button onClick={changeSymbol} className={classes.Button}>{this.state.symbol}</button>
        //     );
        //  });

        
        return(
            <div className={classes.Gameboard}>
                <button onClick={() => this.props.onTurn()} className={classes.Button}>{this.props.symbol}</button>
            </div>
        ) 
    }
    
};

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





