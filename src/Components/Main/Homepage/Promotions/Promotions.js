import styles from "./Promotions.module.scss";

import MarginedRegion from "../../MarginedRegion/MarginedRegion";

import leftImg from "../../../../assets/images/left.png"
import rightImg from "../../../../assets/images/right.png"


/**
 * This function renders images into a carousel to the homepage
 * 
 * @param {Array} promotions an array of promotion titles and text to render in the carousel.
 */
function ImageCarousel({promotions}){

    return (
        <MarginedRegion type="section">
            <h1 className={styles.regionHeading}>Upcoming Events</h1>
            <div className={styles.promotionsContainer}>
                <img className={styles.left} src={leftImg} alt=""/>
                <div className={styles.cardContainer}></div>
                <img className={styles.right} src={rightImg} alt=""/>`
            </div>
        </MarginedRegion>
    );
}

export default ImageCarousel;