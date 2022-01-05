import Card from './Card';

const CardsSection = ({ teams, clickCardHandler }) => {
    return (
        <div className="cards-section">
            {teams.map((team) =>  <Card team={team} key={team.id} clickCardHandler={clickCardHandler} />)}
        </div>
    )
} 

export default CardsSection;