
export default function SearchResult({result, onClick}) {
    let {name, challenge_rating} = result;
    return (<li>Name: {name}, CR: {challenge_rating} <span className='add-monster' onClick={() => onClick(result)}>+</span></li>);
}