import Modes from './Modes';

const Header = ({modes, changeMode}) => {
    return(
        <div className="header">
            <h1 className="header__heading">Premier League Memory</h1>
            <span className="header__instructions">Click All The Cards <u>Once</u> To Win!</span>
            <Modes modes={modes} changeMode={changeMode} />
        </div>
    )
}

export default Header;