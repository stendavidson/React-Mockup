import { useContext } from "react";

import styles from "./PageButton.module.scss";

import NavigationContext from "../../../../Contexts/NavigationContext";

/**
 * This function renders a navigation button.
 * 
 * @param page The page corresponding to the navigation button.
 */
function PageButton({page}){

    /**
     * setPage: A function that will render the desired page and hide the search results.
     */
    const {setPage} = useContext(NavigationContext);

    return (
        <div className={styles.pageButton} onClick={() => {setPage(page)}}>
            <h3 className={styles.buttonLabel}>{page}</h3>
        </div>
    );
}

export default PageButton;
