import { useState, useContext } from "react";

import styles from "./SearchBar.module.scss";

import SearchContext from "../../../Contexts/SearchContext";

import img from "../../../../assets/images/search.png";


/**
 * This function renders a search bar to the navigation bar
 */
function SearchBar(){

    const {siteSearch, setDisplayState} = useContext(SearchContext);

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <form action="" method="" className={styles.searchContainer} onSubmit={(event) => {siteSearch(searchTerm); setDisplayState("flex"); event.preventDefault();}}>
            <input type="text" name="search-field" className={styles.searchField} placeholder="Search" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
            <img src={img} alt="A Search Symbol" className={styles.searchImg} onClick={(event) => {siteSearch(searchTerm); setDisplayState("flex"); event.preventDefault();}}/>
            <input type="submit" style={{display: "none"}}/>
        </form>
    );
}

export default SearchBar