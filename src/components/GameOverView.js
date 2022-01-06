const GameOverView = ({score, resetGame, gameWon}) => {
    const gameoverText = gameWon ? 'You Won!' : 'Game Over';
    return (
        <div className="gameover">
            <span className="gameover--text">{gameoverText}</span>
            <span className="gameover--score">Your Score: {score} </span>
            <button onClick={resetGame} className="gameover--play-again-btn">Play Again</button>
        </div>
    )
}

export default GameOverView;