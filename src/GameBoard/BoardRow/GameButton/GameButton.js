import React, { Component } from 'react'
import classes from './GameButton.module.css'
import * as actionTypes from '../../../store/actions/actionTypes'
import { connect } from 'react-redux'




class GameButton extends Component{

    componentDidMount(){
        this.populateGameBoard()
        console.log('GameBoard ' + this.props.gameBoard)
    }

    state = {
        symbol: ' '
    }

    populateGameBoard(){
        let num = 0;
        for (var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                this.props.gameBoard[i][j] = num;
                num++
            }
        }
    }

    render(){

        const changeSymbol = () => {            
            //console.log('Global State Turn ' + this.props.turn)
           
            if(this.props.turn === 1){
                this.setState({symbol: 'X'})       
                this.props.onTurn()                
            }
            if(this.props.turn === 2)
            {
                this.setState({symbol: 'O'}) 
                this.props.onTurn()                
            }
        }
        
        
        return <button onClick={changeSymbol} className={classes.Button}>{this.state.symbol}</button> 
        
    }
};

const mapStateToProps = state => {
    return{
        turn: state.playerTurn,
        gameBoard: state.gameBoard
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onTurn: () => dispatch({type: actionTypes.CHANGE_TURN}),
        populate: () => dispatch({type: actionTypes.POP_GAMEBOARD})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GameButton)

