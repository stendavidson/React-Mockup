import { useContext } from "react";

import styles from "./Highlights.module.scss";

import MarginedRegion from "../MarginedRegion/MarginedRegion"

import SearchContext from "../../Contexts/SearchContext";

import video from "../../../assets/videos/Highlights.mp4";


/**
 * This function renders the highlights page
 */
function Highlights(){

    const {headings} = useContext(SearchContext);
    
    return (
        <MarginedRegion type="section">
            <h1 className={styles.regionHeading} style={{"backgroundColor" : (headings.includes("Highlights") ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0.0)")}}>Highlights</h1>
            <video className={styles.highlights} controls data-testid="highlights-video">
                <source src={video}/>
            </video>
        </MarginedRegion>   
    );
}

export default Highlights;