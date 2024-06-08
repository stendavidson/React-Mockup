import { useState } from "react";

import styles from "./Navigation.module.scss";

import Logo from "./Logo/Logo";
import PageButton from "./PageButton/PageButton";
import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import DropdownButton from "./DropdownButton/DropdownButton";
import Dropdown from "./Dropdown/Dropdown";



/**
 * This function renders the navigation bar to the page. 
 */
function Navigation(){

    // The visibility of the dropdown is controlled using this state.
    const [hoverState, setHover] = useState("none");

    // The primary pages
    const MAIN_PAGES = ["News", "Fixture", "Ladder", "Highlights"];

    // The secondary pages
    const SECONDARY_PAGES = ["Youth Leagues", "Contact Us", "Privacy Statement", "Terms & Conditions"];
   
    return (
        <nav className={styles.navigation}>
            <Logo page="Homepage"/>
            {MAIN_PAGES.map((page, index) => {return <PageButton key={index} page={page}/>})}
            <SearchBar/>
            <SearchResults/>
            <DropdownButton setHover={setHover}/>
            <Dropdown pages={SECONDARY_PAGES} setHover={setHover} hoverState={hoverState}/>
        </nav>
    );
}


export default Navigation;