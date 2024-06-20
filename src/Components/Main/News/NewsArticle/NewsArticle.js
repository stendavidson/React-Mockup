import { useContext } from "react";

import styles from "./NewsArticle.module.scss";

import SearchContext from "../../../Contexts/SearchContext";


/**
 * This function renders a news article to the page.
 * 
 * @param img The source path of the image
 * 
 * @param alt The alternate text for the image
 * 
 * @param title The title of the article
 * 
 * @param children The raw text of the article (please include <br/> tags).
 */
function NewsArticle({img, alt, title, children}){

    // Input validation
    if(typeof(img) !== "string"){
        throw new TypeError("Invalid input parameter 'img' must be a string.");
    }else if(typeof(alt) !== "string"){
        throw new TypeError("Invalid input parameter 'alt' must be a string.");
    }if(typeof(title) !== "string"){
        throw new TypeError("Invalid input parameter 'title' must be a string.");
    }

    const {headings} = useContext(SearchContext);

    return (
        <article className={styles.newsArticle}>
            <figure>
                <img src={img} alt={alt}/>
                <figcaption>
                    <h1 style={{"backgroundColor" : (headings.includes(title) ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0.0)")}}>{title}</h1>
                </figcaption>
            </figure>
            <div className={styles.marginedRegion}>
                <p>
                    {children}
                </p>
            </div>
        </article>
    );
}

export default NewsArticle;