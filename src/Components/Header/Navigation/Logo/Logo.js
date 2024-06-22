import { useContext } from "react";

import styles from "./Logo.module.scss";

import NavigationContext from "../../../Contexts/NavigationContext";
import SearchContext from "../../../Contexts/SearchContext";

import img from "../../../../assets/images/logo.png";

/**
 * This function renders a logo "button"
 * 
 * @param page The target page to display.
 */
function Logo({page}){

    // Input validation
    if(typeof(page) !== "string"){
        throw new TypeError("Invalid input parameter 'page' must be a string value.");
    }

    const {setPage} = useContext(NavigationContext);
    const {setHeadings} = useContext(SearchContext);

    return <img src={img} alt="The Canberra Football Club Logo" className={styles.logoBtn} onClick={() => {setPage(page); setHeadings([])}}/>;
}

export default Logo;
