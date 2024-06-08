import styles from "./Enrolment.module.scss";

import MarginedRegion from "../MarginedRegion/MarginedRegion"
import EOIForm from "./EOIForm/EOIForm";

import withSubmissionHandler from "../withFormHandler/withFormHandler";


/**
 * This function renders the youth leagues' information.
 */
function Enrolment(){

    const WrappedEOIForm = withSubmissionHandler(EOIForm);
    
    return (
        <MarginedRegion type="section">
            <h1 className={styles.regionHeading}>Expression of Interest</h1>
            <p className={styles.regionText}>
                If you are interested in enrolling your child in one of the youth leagues please submit the following form.
            </p>
            <WrappedEOIForm/>
        </MarginedRegion>
    );
}

export default Enrolment;