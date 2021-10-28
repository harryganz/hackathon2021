
export default function SearchResult({result, onClick}) {
    let {name, challenge_rating} = result;
    return (<li>Name: {name}, CR: {challenge_rating} <button className='add-monster' onClick={() => onClick(result)}>Add</button></li>);
}