import {debounce} from './utils';

import './SearchInput.css';

function SearchInput({onChange}) {
    return (
        <input type='text' onFocus={e => debounce(onChange(e.target.value))} onChange={e => debounce(onChange(e.target.value))}/>
    )
}

export default SearchInput;