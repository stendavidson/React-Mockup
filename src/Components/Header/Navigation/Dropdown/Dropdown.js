import { useContext } from "react";

import styles from "./Dropdown.module.scss";

import NavigationContext from "../../../../Contexts/NavigationContext";

/**
 * This function renders the Page Dropdown section
 * 
 * @param pages An array of page names.
 * 
 * @param hoverState A state value passed from the parent element controlling the visibility of  the dropdown.
 *
 * @param setHover A function that can be used to set the hover state.
 */
function Dropdown({pages, hoverState, setHover}){

    // Input validation
    if(!(pages instanceof Array)){
        throw new TypeError("Invalid input parameter 'pages' must be an Array.");
    }else if(typeof(hoverState) !== "string"){
        throw new TypeError("Invalid input parameter 'hoverState' must be a string.");
    }else if(typeof(setHover) !== "function"){
        throw new TypeError("Invalid input parameter 'setHover' must be a function.");
    }

    /**
     * setPage: A function that will render the desired page and hide the search results.
     */
    const {setPage} = useContext(NavigationContext);

    return(
        <div className={styles.dropdown} onMouseEnter={() => {setHover("flex")}} onMouseLeave={() => {setHover("none")}} style={{display : hoverState}}>
            {pages.map((page, index) => {
                return (
                    <div className={styles.dropdownItem} key={index} onClick={() => {setPage(page)}}>
                        <p>{page}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Dropdown;