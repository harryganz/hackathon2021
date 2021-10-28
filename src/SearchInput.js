import {debounce} from './utils';

import './SearchInput.css';

function SearchInput({query, setQuery}) {
    return (
        <div className='search-input'>
            <input placeholder='Search for Monster' type='text' value={query} onChange={e => debounce(setQuery(e.target.value))}/>
        </div>
    );
}

export default SearchInput;