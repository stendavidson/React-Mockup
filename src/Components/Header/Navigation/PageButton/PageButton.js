import { useContext } from "react";

import styles from "./PageButton.module.scss";

import NavigationContext from "../../../Contexts/NavigationContext";
import SearchContext from "../../../Contexts/SearchContext";

/**
 * This function renders a navigation button.
 * 
 * @param page The page corresponding to the navigation button.
 */
function PageButton({page}){

    // Input validation
    if(typeof(page) !== "string"){
        throw new TypeError("Invalid input parameter 'page' must be a string value.")
    }

    const {setPage} = useContext(NavigationContext);
    const {setHeadings} = useContext(SearchContext);

    return (
        <div className={styles.pageButton} onClick={() => {setPage(page); setHeadings([]);}}>
            <h3>{page}</h3>
        </div>
    );
}

export default PageButton;
