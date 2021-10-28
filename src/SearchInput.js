import {debounce} from './utils';

import './SearchInput.css';

function SearchInput({onChange}) {
    return (
        <div className='search-input'>
            <input placeholder='Search for Monster' type='text' onFocus={e => debounce(onChange(e.target.value))} onChange={e => debounce(onChange(e.target.value))}/>
        </div>
    );
}

export default SearchInput;