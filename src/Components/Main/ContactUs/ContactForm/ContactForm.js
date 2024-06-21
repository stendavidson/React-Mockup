import styles from "./ContactForm.module.scss";

import Button from "../../Button/Button";

import withSubmissionHandler from "../../withFormHandler/withFormHandler";


/**
 * This function renders an expression of interest form to the scree.
 * 
 * @param displayMessage this boolean value is used to display the form (still renders).
 * 
 * @param setDisplayMessage this function enables the "displayMessage" state value to be updated.
 * 
 * @param checkValidity this function provides a mechanism by which input fields may be validated.
 */
function ContactForm({displayMessage, setDisplayMessage, checkValidity}){

    // Input validation
    if(typeof(displayMessage) !== "boolean"){
        throw new TypeError("Invalid input parameter 'displayMessage' must be a boolean.");
    }else if(typeof(setDisplayMessage) !== "function"){
        throw new TypeError("Invalid input parameter 'setDisplayMessage' must be a function.");
    }else if(typeof(checkValidity) !== "function"){
        throw new TypeError("Invalid input parameter 'checkValidity' must be an function.");
    }

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


    return (
        <form className={styles.Form} action="" method="" onSubmit={submit} style={{display : (displayMessage ? "none" : "flex")}}>
            <div className={styles.formSection}>
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <br/>
                    <input name="fullname" onChange={onChange} type="text" placeholder="Full Name"/>
                </div>
            </div>
            <div className={styles.formSection}>
                <div>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input name="email"  type="email" onChange={onChange} placeholder="Email Address: example@gmail.com"/>
                </div>
            </div>
            <div className={styles.formSection}>
                <div>
                    <label htmlFor="message">Message</label>
                    <br/>
                    <textarea name="message" onChange={onChange} placeholder="Please write your message here..."></textarea>
                </div>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default withSubmissionHandler(ContactForm);