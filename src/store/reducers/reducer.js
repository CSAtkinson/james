import * as actionTypes from '../actions/actionTypes'

const initialState = {
    gameBoard: [[], [], []],
    playerTurn: 1,
    playerSymbol: 'X'
}

const changeSymbol = (data) => {            
    console.log('Global State Turn ' + props.turn)
    console.log('Global State Symbol ' + props.symbol)                          
    props.onTurn();
    props.onSymbolChange();
    console.log(props.turn + ' ' + props.symbol)
}




const changeTurn = (data) => {
    if (data === 1){
        return data = 2
    }
    if(data === 2){
        return data = 1
    }
    return data;
}

const changeSymbol = (data) => {
    if (data === 'X'){
        return data = 'O'
    }
    if(data === 'O'){
        return data = 'X'
    }
    return data;
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CHANGE_TURN:            
            let turn = changeTurn(state.playerTurn)
            console.log("Hello from Turn " + state.playerTurn)                  
            return {playerTurn: turn}
        case actionTypes.CHANGE_SYMBOL:            
            let symbol = changeSymbol(state.playerSymbol) 
            console.log("Hello from symbol " + state.playerSymbol)                 
            return {playerSymbol: symbol}
        case actionTypes.POP_GAMEBOARD:
            return null
        default:
            return state;
    }
}

export default reducer