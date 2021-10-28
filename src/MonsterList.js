import Monster from "./Monster";
import "./MonsterList.css"


export default function MonsterList({monsters, add, remove}) {
    let monsterList = [];
    for (let slug in monsters) {
        let monster = monsters[slug];
        monsterList.push(<Monster key={monster.monster.slug} count={monster.count} monster={monster.monster} add={add} remove={remove} />)
    }

    return (
        <div className='monster-list'>
            <div className='monster-list-header'>
                <h3>Encounter</h3>
            </div>
            <div className='monster-list-body'>
                {
                    monsterList.length > 0 ?
                    monsterList :
                    <p className='empty-list-message'>No Monsters Added</p>
                }
            </div>
        </div>
    );
}