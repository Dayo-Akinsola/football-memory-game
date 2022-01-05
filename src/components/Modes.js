const Modes = ({modes, changeMode}) => {
    return (
        <div className="header__modes">
            <span onClick={changeMode} className={modes.easy[0] ? 'header__mode--easy mode active' : 'header__mode--easy mode'}>
                Easy
            </span>
            |
            <span onClick={changeMode} className={modes.medium[0] ? 'header__mode--medium mode active' : 'header__mode--medium mode'}>
                Medium
            </span>
            |
            <span onClick={changeMode} className={modes.hard[0] ? 'header__mode--hard mode active' : 'header__mode--hard mode'}>
                Hard
            </span>
        </div>
    )
}

export default Modes;