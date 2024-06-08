import styles from "./InfoBlock.module.scss";


/**
 * This function renders a block of club info to the footer section
 */
function InfoBlock(){

    return (
        <div className={styles.footerBlock}>
            <h2 className={styles.blockHeading}>Canberra FC</h2>
            <p className={styles.blockLines}>4 Teesdale Place</p>
            <p className={styles.blockLines}>Stirling</p>
            <p className={styles.blockLines}>ACT</p>
        </div>
    )
}

export default InfoBlock;