import "./Monster.css";
import {calculateXp} from "./utils";

export default function Monster({monster, count, add, remove}) {
    const {name, challenge_rating, size, type, alignment, armor_class, hit_points, slug} = monster;
    return (
        <div className='monster'>
            <h3>{name}</h3>
            <div>{size}, {alignment}, {type}</div>
            <div>Armor Class: {armor_class}</div>
            <div>Hit Points: {hit_points}</div>
            <div>Challenge Rating: {challenge_rating} (XP: {calculateXp(challenge_rating)})</div>
            <div className='btn-group'>
                <button className='btn warn' onClick={() => remove(slug)}>-</button>
                <span>Count: {count}</span>
                <button className='btn success' onClick={() => add(slug)}>+</button>
            </div>
        </div>
    );
}