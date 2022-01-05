const Card = ({ team, clickCardHandler }) => {
    return (
        <div className="card" onClick={(event) => clickCardHandler(event, team)}>
            <img src={team.logo} alt={team.name} className="card__img" />
            <span className="card__name">{team.name}</span>
        </div>
    )
}

export default Card;