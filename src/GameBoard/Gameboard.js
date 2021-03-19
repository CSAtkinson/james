import classes from './Gameboard.module.css'
import GameButton from './GameButton'

const GameBoard = ({gameButtons, onClick, turn, winner}) => {

    let turnWinner = (<p>Player Turn: {turn}</p>)

    if(winner){
        turnWinner = <p>WINNER!!!</p>
    }  

    return(
        <div className={classes.outerDiv}>
            <div className={classes.emptyDiv}> {turnWinner} </div>
            <div className={classes.emptyDiv}>
            {gameButtons.map((gameButton, i) => (
                <GameButton key={i} value={gameButton} onClick={()=> onClick(i)} />
            ))}           
            </div>
            <div className={classes.emptyDiv}></div>
        </div>
    )
}

export default GameBoard