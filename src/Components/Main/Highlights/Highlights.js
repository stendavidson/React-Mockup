import styles from "./Highlights.module.scss";

import MarginedRegion from "../MarginedRegion/MarginedRegion"

import video from "../../../assets/videos/Highlights.mp4";

/**
 * This function renders the highlights page
 */
function Highlights(){
    
    return (
        <MarginedRegion type="section">
            <h1 className={styles.regionHeading}>Highlights</h1>
            <video controls alt="A highlight reel of the club's most recent game." className={styles.highlights}>
                <source src={video}/>
            </video>
        </MarginedRegion>   
    );
}

export default Highlights;