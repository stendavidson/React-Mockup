import styles from "./Map.module.scss";


/**
 * This function renders a google map of the club's location
 */
function Map(){
    
    return (
        <section className={styles.embedSection}>
            <h1>Where To Find Us</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4179.757768415742!2d149.04734897749006!3d-35.35038524124777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b17b52d5cee1465%3A0xb9713ff3551b0ab7!2sStirling%20District%20Playing%20Fields%20No.1!5e0!3m2!1sen!2sau!4v1715721050217!5m2!1sen!2sau" title="Canberra FC's Location" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    );
}

export default Map;