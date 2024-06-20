import styles from "./Checkbox.module.scss";


/**
 * This function renders a custom checkbox to the form element.
 */
function Checkbox({checked, setChecked, children}){

    // Input validation
    if(typeof(checked) !== "boolean"){
        throw new TypeError("Invalid input parameter 'checked' must be a boolean.");
    }else if(typeof(setChecked) !== "function"){
        throw new TypeError("Invalid input parameter 'setChecked' must be a function.");
    }else if(typeof(children) !== "string"){
        throw new TypeError("Invalid input parameter 'children' must be a string.");
    }

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