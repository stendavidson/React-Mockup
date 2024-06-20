import { useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import styles from "./Enrolment.module.scss";

import DefaultComponent from "../../DefaultComponent/DefaultComponent";
import MarginedRegion from "../MarginedRegion/MarginedRegion"
import EOIForm from "./EOIForm/EOIForm";

import withSubmissionHandler from "../withFormHandler/withFormHandler";

import SearchContext from '../../Contexts/SearchContext';


/**
 * This function renders the youth leagues' information.
 */
function Enrolment(){

    const WrappedEOIForm = withSubmissionHandler(EOIForm);
    
    const {headings} = useContext(SearchContext);
    
    return (
        <MarginedRegion type="section">
            <h1 className={styles.regionHeading} style={{"backgroundColor" : (headings.includes("Expression of Interest") ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0.0)")}}>Expression of Interest</h1>
            <p className={styles.regionText}>
                If you are interested in enrolling your child in one of the youth leagues please submit the following form.
            </p>
            <ErrorBoundary FallbackComponent={DefaultComponent}>
                <WrappedEOIForm/>
            </ErrorBoundary>
        </MarginedRegion>
    );
}

export default Enrolment;