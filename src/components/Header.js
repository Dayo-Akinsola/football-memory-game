import Modes from './Modes';

const Header = ({modes, changeMode}) => {
    return(
        <div className="header">
            <h2 className="header__heading">Premier League Memory</h2>
            <Modes modes={modes} changeMode={changeMode} />
        </div>
    )
}

export default Header;