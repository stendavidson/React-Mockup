import styles from "./Promotions.module.scss";

import MarginedRegion from "../../MarginedRegion/MarginedRegion";

import leftImg from "../../../../assets/images/left.png"
import rightImg from "../../../../assets/images/right.png"
import { useState } from "react";


/**
 * This function renders images into a carousel to the homepage
 * 
 * @param promotions an array of promotional material to be displayed in a carousel.
 */
function Promotions({promotions}){

    // Input validation
    if(!(promotions instanceof Array)){
        throw new TypeError("Invalid input parameter 'promotions' must be an Array.");
    }

    const [pos, setPos] = useState(0);

    /**
     * 
     * @param positive This indicates the direction to move the carousel: true indicates
     * rightwards, false indicates leftwards.
     */
    function move(positive){

        // Input validation
        if(typeof(positive) !== "boolean"){
            throw new TypeError("Invalid input parameter 'positive' must be an boolean value.");
        }

        // Conditional will essentially loop the carousel while transitioning.
        if(positive && (pos/-590 === (promotions.length - 1))){
            setPos(0);
        }else if(!positive && pos === 0){
            setPos(-590 * (promotions.length - 1));
        }else if(!positive){
            setPos(pos + 590);
        }else{
            setPos(pos - 590);
        }
    }
    
    
    return (
        <MarginedRegion type="section">
            <h1 className={styles.regionHeading} style={{"backgroundColor" : (headings.includes("Upcoming Events") ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0.0)")}}>Upcoming Events</h1>
            <ErrorBoundary FallbackComponent={DefaultComponent}>
                <div className={styles.promotionsContainer}>
                    <img className={styles.left} src={leftImg} alt="" onClick={() => {move(false)}}/>
                    <div id={styles.cardContainer}>
                        {
                            promotions.map((promotion, index) => (
                                <div key={index} className={styles.promotionCard} style={{
                                    transform : `translateX(max(${(0.45*pos)/10}vw, ${pos}px))`,
                                    transition : "transform 0.5s"
                                }}>
                                    <div className={styles.marginedCard}>
                                        <h1>{promotion.title}</h1>
                                        <p>
                                            {promotion.body}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className={styles.fadeBlock}></div>
                    </div>
                    <img className={styles.right} src={rightImg} alt="" onClick={() => {move(true)}}/>
                </div>
            </ErrorBoundary>
        </MarginedRegion>
    );
}

export default Promotions;