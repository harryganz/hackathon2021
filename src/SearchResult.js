import "./SearchResult.css";

export default function SearchResult({result, onClick}) {
    let {name, challenge_rating} = result;
    return (
        <li className='search-result'>
            <span>{name} (CR {challenge_rating})</span>
            <button className='btn add-monster' onClick={() => onClick(result)}>Add</button>
        </li>
    );
}