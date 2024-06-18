import { useState } from "react";

import styles from "./EOIForm.module.scss";

import Button from "../../Button/Button";
import Checkbox from "./Checkbox/Checkbox";


/**
 * This function renders an expression of interest form to the scree.
 * 
 * @param displayMessage this boolean value is used to display the form (still renders).
 * 
 * @param setDisplayMessage this function enables the "displayMessage" state value to be updated.
 * 
 * @param checkValidity this function provides a mechanism by which input fields may be validated.
 */
function EOIForm({displayMessage, setDisplayMessage, checkValidity}){

    // Input validation
    if(typeof(displayMessage) !== "boolean"){
        throw new TypeError("Invalid input parameter 'displayMessage' must be a boolean.");
    }else if(typeof(setDisplayMessage) !== "function"){
        throw new TypeError("Invalid input parameter 'setDisplayMessage' must be a function.");
    }else if(typeof(checkValidity) !== "function"){
        throw new TypeError("Invalid input parameter 'checkValidity' must be an function.");
    }

    // This controls the behaviour of the custom checkbox - hides or displays a section of the form.
    const [checked, setChecked] = useState(false);

    // This inline function triggers a validity check on a given element.
    const onChange = (event) => {checkValidity(event.target)};

    /**
     * This function handles form submission & performs validation.
     * 
     * @param event the event that triggered this function
     */
    function submit(event){
        
        // Input validation
        if(typeof(event) !== "object" || !event.hasOwnProperty("type") || event.type !== "submit"){
            throw new  TypeError("Invalid input parameter 'event' must be a valid event object.");
        }

        // The default onSubmit function is prevented
        event.preventDefault();
        
        // Individual field errors are set
        Array.from(event.target.elements).forEach((element) => {checkValidity(element)});
        
        // The form validity is verified before "submission".
        if(!event.target.checkValidity()){
            
            event.target.reportValidity();

        }else{
            setDisplayMessage(true);
        }
        
    }


    // Conditionally display a block of the form
    let conditionsSection = null;

    if(checked){
        conditionsSection = (
            <div className={styles.hiddenSection} style={{display : (checked ? "block" : "none")}}>
                <label htmlFor="conditions">Pre-existing Health Conditions</label>
                <br/>
                <textarea key={"1"} name="conditions" onChange={onChange} placeholder="List any pre-existing health conditions your child has..."></textarea>
            </div>
        )
    }
    
    
    return (
        <form className={styles.Form} action="" method="" onSubmit={submit} style={{display : (displayMessage ? "none" : "flex")}}>
            <div className={styles.formSection}>
                <div>
                    <label htmlFor="first-name">First Name</label>
                    <br/>
                    <input name="first-name" onChange={onChange} type="text" placeholder="Child's First Name"/>
                </div>
                <div>
                    <label htmlFor="last-name">Last Name</label>
                    <br/>
                    <input name="last-name" onChange={onChange} type="text" placeholder="Child's Last Name"/>
                </div>
            </div>
            <Checkbox checked={checked} setChecked={setChecked}>The child has a pre-existing health condition</Checkbox>
            {conditionsSection}
            <div className={styles.formSection}>
                <div>
                    <label htmlFor="guardian-fname">Guardian's First Name</label>
                    <br/>
                    <input name="guardian-fname" onChange={onChange} type="text" placeholder="Guardian's First Name"/>
                </div>
                <div>
                    <label htmlFor="guardian-lname">Guardian's Last Name</label>
                    <br/>
                    <input name="guardian-lname" onChange={onChange} type="text" placeholder="Guardian's Last Name"/>
                </div>
            </div>
            <div className={styles.formSection}>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <br/>
                    <input name="phone" type="text" onChange={onChange} placeholder="Phone Number: 02XX XXX XXX"/>
                </div>
            </div>
            <div className={styles.formSection}>
                <div>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input name="email"  type="email" onChange={onChange} placeholder="Email Address: example@gmail.com"/>
                </div>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default EOIForm;