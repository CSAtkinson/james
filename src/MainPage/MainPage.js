import React, { Component } from 'react'
import WelcomeBar from '../WelcomeBar/WelcomeBar'
import Auxillary from '../hoc/Auxillary/Auxullary'
import TicTacToe from '../TicTacToe/TicTacToe'

class MainPage extends Component{
    render(){

        return(
            <Auxillary>
                <WelcomeBar />
                <TicTacToe />
            </Auxillary>            
        )
    }
    
};

export default MainPage