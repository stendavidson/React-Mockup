import { useContext } from "react";

import styles from "./LinkBlock.module.scss";

import NavigationContext from "../../Contexts/NavigationContext";
import SearchContext from "../../Contexts/SearchContext";


/**
 * This function renders a block of pseudo links to the footer
 */
function LinkBlock({blockTitle, pages}){

    // Input validation
    if(typeof(blockTitle) !== "string"){
        throw new TypeError("Invalid input parameter 'blockTitle' must be a string.");
    }else if(!(pages instanceof Array)){
        throw new TypeError("Invalid input parameter 'pages' must be an Array.");
    }

    const {setPage} = useContext(NavigationContext);
    const {setHeadings} = useContext(SearchContext);

    return (
        <div className={styles.footerBlock}>
            <h2>{blockTitle}</h2>
            {pages.map((page, index) => {
                return (
                    <p key={index} onClick={() => {setPage(page); setHeadings([]);}}>{page}</p>
                );
            })}
        </div>
    );
}

export default LinkBlock;