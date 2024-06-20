import { useContext } from "react";

import styles from "./News.module.scss";

import NewsArticle from "./NewsArticle/NewsArticle";

import SearchContext from "../../Contexts/SearchContext";

import img from "../../../assets/images/Soccer News.png"



/**
 * This function renders News articles to the page.
 */
function News(){

    const {headings} = useContext(SearchContext);

    return (
        <>
            <h1 className={styles.altHeading} style={{"backgroundColor" : (headings.includes("News") ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0.0)")}}>News</h1>
            <NewsArticle img={img} alt="A football (soccer ball) sitting stationary on the ground." title="Lorem ipsum dolor sit amet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ex, pretium vel pellentesque a, cursus non urna.
                Vestibulum commodo dui et ipsum porttitor congue. Sed tristique tellus eget pretium congue. Ut ultricies a sapien commodo
                tempor. In libero augue, condimentum et dictum vitae, volutpat nec enim. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Cras leo enim, fringilla vel odio in, ornare fringilla sapien.
                <br/><br/>
                Praesent tristique, nibh vel posuere vehicula, turpis leo rhoncus libero, fermentum bibendum arcu nunc ut ante. Suspendisse vel
                semper ante, at sodales libero. Maecenas et tristique velit. Ut sed tempor leo, sagittis bibendum ex. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis tincidunt libero. Proin quis lacus ligula.
                Praesent quis quam lacus. Curabitur egestas cursus libero a fringilla. Nullam placerat eget ante vitae sodales.
            </NewsArticle>
            <NewsArticle img={img} alt="A football (soccer ball) sitting stationary on the ground." title="Lorem ipsum carpe dium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ex, pretium vel pellentesque a, cursus non urna.
                Vestibulum commodo dui et ipsum porttitor congue. Sed tristique tellus eget pretium congue. Ut ultricies a sapien commodo
                tempor. In libero augue, condimentum et dictum vitae, volutpat nec enim. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Cras leo enim, fringilla vel odio in, ornare fringilla sapien.
                <br/><br/>
                Praesent tristique, nibh vel posuere vehicula, turpis leo rhoncus libero, fermentum bibendum arcu nunc ut ante. Suspendisse vel
                semper ante, at sodales libero. Maecenas et tristique velit. Ut sed tempor leo, sagittis bibendum ex. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed quis tincidunt libero. Proin quis lacus ligula.
                Praesent quis quam lacus. Curabitur egestas cursus libero a fringilla. Nullam placerat eget ante vitae sodales.
            </NewsArticle>
        </>
    );
}

export default News;