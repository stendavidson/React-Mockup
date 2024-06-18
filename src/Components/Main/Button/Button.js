import styles from "./Button.module.scss";

/**
 * This is a generic themed button.
 * 
 * @param type The type of button "submit" or "button"
 * 
 * @param onClick The function to be triggered on the click event.
 * 
 * @param children The button text.
 */
function Button({type, onClick, children}){

    // Input validation
    if(typeof(type) !== "string"){
        throw new TypeError("Invalid input parameter 'type' must be a string.");
    }else if(onClick !== undefined && typeof(onClick) !== "function"){
        throw new TypeError("Invalid input parameter 'onClick' must be a function.");
    }else if(typeof(children) !== "string"){
        throw new TypeError("Invalid input parameter 'children' must be a string value.");
    }

    return (
        <button type={type} className={styles.themedButton} onClick={onClick ? () => {onClick()} : undefined}>
            {children}
        </button>
    );
}

export default Button;