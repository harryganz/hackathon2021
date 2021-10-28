import { useState } from "react";
import Card from "./Card";
import {calculateXpBudget, calculateTotalXp, calculateMultiplier} from "./utils";
import "./Encounter.css";

export default function Encounter({monsters}) {
    const [numPlayers, setNumPlayers] = useState(1);
    const [playerLevel, setPlayerLevel] = useState(1);
    let xpBudget = calculateXpBudget(numPlayers, playerLevel);
    let totalMonsterXp = calculateTotalXp(monsters);
    let xpMultiplier = calculateMultiplier(monsters);
    return (
        <Card className='encounter'>
            <Card.Header>
                <h3>Encounter</h3>
            </Card.Header>
            <Card.Body>
                <div className='form-group'>
                    <label>Number of Players:</label> <input type='number' min='1' value={numPlayers} onChange={e => setNumPlayers(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Avg. Player Level:</label> <input type='number' min='1' max='20' value={playerLevel} onChange={e => setPlayerLevel(e.target.value)} />
                </div>
                <div>
                    <h4>XP Budget</h4>
                    <div className='xp-budget'>
                        <div>
                            <p>Easy</p>
                            <p>{xpBudget}</p>
                        </div>
                        <div>
                            <p>Medium</p>
                            <p>{2*xpBudget}</p>
                        </div>
                        <div>
                            <p>Hard</p>
                            <p>{3*xpBudget}</p>
                        </div>
                        <div>
                            <p>Deadly</p>
                            <p>{4*xpBudget}</p>
                        </div>
                    </div>
                </div>
                {
                    Object.keys(monsters).length > 0 ?
                        <div>
                            <h4>Monster XP</h4>
                            <div className='xp-budget'>
                                <div>
                                    <p>Sum XP</p>
                                    <p>{totalMonsterXp}</p>
                                </div>
                                <div>
                                    <p>Multiplier</p>
                                    <p>{xpMultiplier}</p>
                                </div>
                                <div>
                                    <p>Total XP</p>
                                    <p>{xpMultiplier * totalMonsterXp}</p>
                                </div>
                            </div>
                        </div>
                    : ''
                }
            </Card.Body>
        </Card>
    )
}