import styles from "./Weather.module.scss";


/**
 * This function renders a google map of the club's location
 */
function Weather(){
    
    return (
        <section className={styles.embedSection}>
            <h1>Where To Find Us</h1>
            <div style={{backgroundColor : "grey"}}></div>
        </section>
    );
}

export default Weather;