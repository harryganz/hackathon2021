import "./Monster.css";

export default function Monster({monster, count, add, remove}) {
    const {name, challenge_rating, size, type, alignment, armor_class, hit_points, slug} = monster;
    return (
        <div className='monster'>
            <h3>{name}</h3>
            <div>{size}, {alignment}, {type}</div>
            <div>AC: {armor_class}</div>
            <div>HP: {hit_points}</div>
            <div>CR: {challenge_rating}</div>
            <div className='btn-group'>
                <button className='btn warn' onClick={() => remove(slug)}>-</button>
                <span>Count: {count}</span>
                <button className='btn success' onClick={() => add(slug)}>+</button>
            </div>
        </div>
    );
}