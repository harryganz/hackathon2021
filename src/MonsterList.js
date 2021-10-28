import Monster from "./Monster";
import Card from "./Card";
import "./MonsterList.css";


export default function MonsterList({monsters, add, remove}) {
    let monsterList = [];
    for (let slug in monsters) {
        let monster = monsters[slug];
        monsterList.push(<Monster key={monster.monster.slug} count={monster.count} monster={monster.monster} add={add} remove={remove} />)
    }

    return (
        <Card className='monster-list'>
            <Card.Header>
                <h3>Encounter</h3>
            </Card.Header>
            <Card.Body className='monster-list-body'>
                {
                    monsterList.length > 0 ?
                    monsterList :
                    <p className='empty-list-message'>No Monsters Added</p>
                }
            </Card.Body>
        </Card>
    );
}