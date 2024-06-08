import { useContext } from "react";

import styles from "./Logo.module.scss";

import NavigationContext from "../../../../Contexts/NavigationContext";

import img from "../../../../assets/images/logo.png";

/**
 * This function renders a logo "button"
 * 
 * @param page The target page to display.
 */
function Logo({page}){

    /**
     * setPage: A function that will render the desired page and hide the search results.
     */
    const {setPage} = useContext(NavigationContext);

    return <img src={img} alt="The Canberra Football Club Logo" className={styles.logoBtn} onClick={() => {setPage(page)}}/>;
}

export default Logo;
