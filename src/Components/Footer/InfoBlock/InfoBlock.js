import styles from "./InfoBlock.module.scss";


/**
 * This function renders a block of club info to the footer section
 */
function InfoBlock(){

    return (
        <div className={styles.footerBlock}>
            <h2>Canberra FC</h2>
            <p>4 Teesdale Place</p>
            <p>Stirling</p>
            <p>ACT</p>
        </div>
    );
}

export default InfoBlock;