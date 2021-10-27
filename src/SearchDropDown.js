import { useRef } from "react";
import SearchResult from "./SearchResult";
import { ClickOutsideEffect } from "./utils";

function SearchDropDown({loading, results, showResults, setShowResults}) {
    const searchDropDownRef = useRef(null);
    ClickOutsideEffect(searchDropDownRef, () => setShowResults(false))
    if (!showResults) {
        return '';
    }
    if (loading) {
        return (<div ref={searchDropDownRef} className="search-dropdown loading">Loading...</div>);
    }
    if (results.length === 0) {
        return (<div ref={searchDropDownRef} className="search-dropdown empty">No Results.</div>);
    }
    let searchResults = results.map((el, i) => <SearchResult key={i} result={el}/>);
    return (
        <div ref={searchDropDownRef} className="search-dropdown">
            <ul>{searchResults}</ul>
        </div>
    );
}

export default SearchDropDown;