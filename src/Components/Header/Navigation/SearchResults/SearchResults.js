import { useContext } from "react";

import styles from "./SearchResults.module.scss";

import SearchContext from "../../../../Contexts/SearchContext";
import NavigationContext from "../../../../Contexts/NavigationContext";


/**
 * This function renders a search results drop down below the navigation bar.
 */
function SearchResults(){

    /** 
     * results: A 2D array of results containing the name of the page and the contents of the
     * heading: [[page-name, heading-contents],...,[]]
     * 
     * displayState: The display style - this will be toggled on submission of the search Bar.
     * 
     * setDisplayState: This function alters the display style - it will toggle when an item is selected.
     */
    const {results, displayState, setDisplayState} = useContext(SearchContext);

    /**
     * setPage: A function that will render the desired page and hide the search results.
     */
    const {setPage} = useContext(NavigationContext);

    return (
        <div className={styles.searchResults} style={{display : displayState}} id="search-results">
            {results.map((result, index) => {
                return (
                    <div className={styles.resultBox} key={index} onClick={() => {setPage(result[0]); setDisplayState("none");}}>
                        <h3>{result[0]}:</h3><p className={styles.resultText}>{result[1]}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default SearchResults;