import SearchInput from "./SearchInput";
import SearchDropDown from "./SearchDropDown";
import { useEffect, useState } from "react";

function getSearchResults(searchTerm, setFetching, setSearchResults, setShowResults) {
    if (!searchTerm) {
        setFetching(false);
        setSearchResults([]);
        setShowResults(false);
        return;
    }
    setShowResults(true);
    setFetching(true);
    fetch(`https://api.open5e.com/monsters/?limit=10&search=${encodeURIComponent(searchTerm)}`, {redirect: 'follow'})
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error getting data from API (${response.status})`);
            }
            response.json().then(data => {
                if (data.results) {
                    setSearchResults(data.results)
                } else {
                    setSearchResults([]);
                }
            });
            
        })
        .finally(() => {
            setFetching(false);
        });
}

function SearchContainer({addNewMonster}) {
    const [searchResults, setSearchResults] = useState([]);
    const [isFetching, setFetching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [query, setQuery] = useState('');

    const clearQuery = () => setQuery('');

    useEffect(() => {
        getSearchResults(query, setFetching, setSearchResults, setShowResults);
    }, [query]);

    return (
        <div className='search-container'>
            <SearchInput setQuery={setQuery} query={query}/>
            <SearchDropDown results={searchResults} loading={isFetching} showResults={showResults} setShowResults={setShowResults} addNewMonster={addNewMonster} clearQuery={clearQuery}/>
        </div>
    );
}

export default SearchContainer;

