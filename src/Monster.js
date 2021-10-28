export default function Monster({monster, count, add, remove}) {
    const {name, challenge_rating, size, type, alignment, armor_class, hit_points, slug} = monster;
    return (
        <div className='monster'>
            <h3>{name}</h3>
            <div>{size}, {alignment}, {type}</div>
            <div>AC: {armor_class}</div>
            <div>HP: {hit_points}</div>
            <div>CR: {challenge_rating}</div>
            <div><button onClick={() => remove(slug)}>-</button><span>{count}</span><button onClick={() => add(slug)}>+</button></div>
        </div>
    );
}