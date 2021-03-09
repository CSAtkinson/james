import React, { Component, useState } from 'react'
import classes from './GameButton.module.css'



class GameButton extends Component{

    state = {
        turn: 1,
        symbol: ' '
    }

    render(){
        const sendData = () => {
            this.props.change(this.state.turn, this.state.symbol)
        }

        const changeSymbol = () => {
            console.log(this.state.symbol)
            console.log(this.state.turn)
            if(this.state.turn === 1){
                this.setState({turn: 2, symbol: 'X'})   
            }
            if(this.state.turn === 2)
            {
                this.setState({turn: 1, symbol: 'O'})
            }
        }

        return <button onClick={changeSymbol} className={classes.Button}>{this.state.symbol}</button> 
        
    }
};
export default GameButton

