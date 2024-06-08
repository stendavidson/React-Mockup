import styles from "./DropdownButton.module.scss"

import img from "../../../../assets/images/dropdown.png";

/**
 * This function renders a dropdown button
 * 
 * @param setHover This function sets the display style for the dropdown component.
 */
function DropdownButton({setHover}){

    return (
        <div className={styles.dropdownButton} onMouseEnter={() => {setHover("flex")}} onMouseLeave={() => {setHover("none")}}>
            <h3 className={styles.buttonLabel}>More</h3>
            <img className={styles.buttonImg} src={img} alt=""/>
        </div>
    );
}


export default DropdownButton;