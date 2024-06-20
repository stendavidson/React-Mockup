import { useState, useEffect, useContext } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ClickAwayListener } from "@mui/base";

import styles from "./SearchResults.module.scss";

import SearchContext from "../../../Contexts/SearchContext";
import NavigationContext from "../../../Contexts/NavigationContext";
import DefaultComponent from "../../../DefaultComponent/DefaultComponent";


/**
 * This function renders a search results drop down below the navigation bar.
 */
function SearchResults(){

    const {results, displayState, setDisplayState, setHeadings} = useContext(SearchContext); // eslint-disable-line -- when not included in dependencies this causes errors

    const {setPage} = useContext(NavigationContext); // eslint-disable-line -- when not included in dependencies this causes errors

    const [output, setOutput] = useState(null); // eslint-disable-line -- when not included in dependencies this causes errors

    // useEffect was used to enable the onClickAway functionality
    useEffect(() => {
        if(results.length > 0){
            setOutput(results.map((result, index) => {
                return (
                    <div className={styles.resultBox} key={index} onClick={() => {setPage(result.page); setHeadings([result.title]); setDisplayState("none");}}>
                        <h3>{result.page}:</h3><p className={styles.resultText}>{result.title}</p>
                    </div>
                );
            }))
        }else{
            setOutput(
                <div className={styles.resultBox} key={0} onClick={() => {setDisplayState("none");}}>
                    <h3>No results found</h3>
                </div>
            );
        }
    }, [results]); // eslint-disable-line -- desired rendering dependency is only search 'results'


    return (
        <ErrorBoundary FallbackComponent={DefaultComponent}>
            <ClickAwayListener onClickAway={() => {setOutput(null)}}>
                <div className={styles.searchResults} style={{display : displayState}} id="search-results">
                    {output}
                </div>
            </ClickAwayListener>
        </ErrorBoundary>
    );
}

export default SearchResults;