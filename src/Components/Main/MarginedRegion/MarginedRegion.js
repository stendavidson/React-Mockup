import styles from "./MarginedRegion.module.scss";

/**
 * This function renders a margined article or section to the page
 * 
 * @param type The semantic element tag: article and section are valid.
 * 
 * @param children The child elements / fragments.
 */
function MarginedRegion({type, children}){

    let region = null;

    if(type === "article"){
        region = (
            <article className={styles.region}>
                <div className={styles.marginedRegion}>
                    {children}
                </div>
            </article>
        );

    }else if(type === "section"){
        region = (
            <section className={styles.region}>
                <div className={styles.marginedRegion}>
                    {children}
                </div>
            </section>
        );
    }

    return region;
}

export default MarginedRegion;