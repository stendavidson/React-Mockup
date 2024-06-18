import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./ImageCarousel.css";
import styles from "./Image.module.scss"


/**
 * This function renders images into a carousel to the homepage
 * 
 * @param {Array} images an array of headings and images to render in the carousel.
 */
function ImageCarousel({images}){

    // Input validation
    if(!(images instanceof Array)){
        throw new TypeError("Invalid input parameter 'images' must be an Array.");
    }

    return (
        <section className={styles.carouselContainer}>     
            <Carousel showThumbs={false} centerMode={true} showArrows={true} centerSlidePercentage={70} width={"100%"} infiniteLoop={true} swipeable={true}>
                {
                    images.map((image, index) => {
                        return (
                            <figure key={index} className={styles.imgContainer}>
                                <img src={image.path} alt={image.alt}/>
                                <figcaption>{image.caption}</figcaption>
                            </figure>
                        );
                    })
                }
            </Carousel>
        </section>
    );
}

export default ImageCarousel;