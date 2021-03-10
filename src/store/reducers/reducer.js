import * as actionTypes from '../actions/actionTypes'

const initialState = {
    gameBoard: [[], [], []],
    playerTurn: 1,
    symbol: ''
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


const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CHANGE_TURN:            
            let turn = changeTurn(state.playerTurn)                  
            return {playerTurn: turn}
        case actionTypes.POP_GAMEBOARD:
            return null
        default:
            return state;
    }
}

export default reducer