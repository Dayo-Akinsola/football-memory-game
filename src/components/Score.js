const Score = ({ currentScore, bestScore }) => {
    return (
        <div className="score">
            <div className="score__current-wrapper">
                <span className="score__current--text">Current </span>
                <span className="score__current--value">{currentScore}</span>
            </div>
            <span className="score__divider">:</span>
            <div className="score__best-wrapper">
                <span className="score__best--text">Best </span>
                <span className="score__best--value">{bestScore}</span>
            </div>
        </div>
    )
}

export default Score;