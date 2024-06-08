import styles from "./Header.module.scss";

import Navigation from "./Navigation/Navigation";


/**
 * This function renders the header to the page
 */
function Header(){

    return (
        <header className={styles.head}>
            <Navigation/>
        </header>
    );
}

export default Header;