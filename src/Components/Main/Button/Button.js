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

    return (
        <button type={type} className={styles.themedButton} onClick={onClick ? () => {onClick()} : undefined}>
            {children}
        </button>
    )
}

export default Button;