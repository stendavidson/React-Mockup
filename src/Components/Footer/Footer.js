import styles from "./Footer.module.scss";

import InfoBlock from "./InfoBlock/InfoBlock";
import LinkBlock from "./LinkBlock/LinkBlock";


function Footer(){

    // The primary pages
    const MAIN_PAGES = ["News", "Fixture", "Ladder", "Highlights"];

    // The secondary pages
    const SECONDARY_PAGES = ["Youth Leagues", "Contact Us", "Privacy Statement", "Terms & Conditions"];

    return(
        <footer className={styles.foot}>
            <div className={styles.footerBox}>
                <InfoBlock/>
                <LinkBlock blockTitle="Main Pages" pages={MAIN_PAGES}/>
                <LinkBlock blockTitle="Other Pages" pages={SECONDARY_PAGES}/>
            </div>
            <p>© 2024 Canberra Football Club</p>
        </footer>
    )
}

export default Footer;