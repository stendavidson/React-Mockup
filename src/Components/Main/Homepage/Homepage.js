import styles from "./Homepage.module.scss";

import ImageCarousel from "./ImageCarousel/ImageCarousel";
import Promotions from "./Promotions/Promotions";
import AboutUs from "./AboutUs/AboutUs";
import Weather from "./Weather/Weather";
import Map from "./Map/Map";


/**
 * This function renders the homepage to the screen.
 */
function Homepage(){

    return (
        <>
            <ImageCarousel/>
            <Promotions/>
            <AboutUs/>
            <Weather/>
            <Map/>
        </>
    )
}

export default Homepage;