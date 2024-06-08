import styles from "./Checkbox.module.scss";


/**
 * This function renders a custom checkbox to the form element.
 */
function Checkbox({checked, setChecked, children}){

    return (
        <div className={styles.inlineSection}>
            <div className={styles.checkbox} onClick={() => {setChecked(!checked)}}>
                <div className={styles.check} style={{display : (checked ? "block" : "none")}}></div>
            </div>
            <h3>{children}</h3>
        </div>
    );
}

export default Checkbox;