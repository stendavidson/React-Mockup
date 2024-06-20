import { useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import styles from "./ContactUs.module.scss";

import DefaultComponent from "../../DefaultComponent/DefaultComponent";
import MarginedRegion from "../MarginedRegion/MarginedRegion"
import ContactForm from "./ContactForm/ContactForm";

import withSubmissionHandler from "../withFormHandler/withFormHandler";

import SearchContext from '../../Contexts/SearchContext';


/**
 * This function renders the youth leagues' information.
 */
function Enrolment(){

    const WrappedContactForm = withSubmissionHandler(ContactForm);

    const {headings} = useContext(SearchContext);
    
    return (
        <MarginedRegion type="section">
            <h1 className={styles.regionHeading} style={{"backgroundColor" : (headings.includes("Contact Us") ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0.0)")}}>Contact Us</h1>
            <p className={styles.regionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ex, pretium vel pellentesque a, cursus
                non urna. Vestibulum commodo dui et ipsum porttitor congue. Sed tristique tellus eget pretium congue. Ut ultricies
                a sapien commodo tempor. In libero augue, condimentum et dictum vitae, volutpat nec enim. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras leo enim, fringilla vel odio in, ornare
                fringilla sapien.
            </p>
            <h2 className={styles.regionSubHeading}>General Inquiries</h2>
            <ul className={styles.regionText}>
                <li><strong>Email:</strong> admin@cfc.com.au</li>
                <li><strong>Phone:</strong> 0269 022 530</li>
            </ul>
            <h2 className={styles.regionSubHeading}>Media Inquiries</h2>
            <ul className={styles.regionText}>
                <li><strong>Email:</strong> media@cfc.com.au</li>
                <li><strong>Phone:</strong> 0269 022 531</li>
            </ul>
            <h1 className={styles.regionHeading} style={{"backgroundColor" : (headings.includes("Send Us A Message") ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0.0)")}}>Send Us A Message</h1>
            <p className={styles.regionText}>If you want to send us a message please fill out the form below and we'll get back to you soon.</p>
            <ErrorBoundary FallbackComponent={DefaultComponent}>
                <WrappedContactForm/>
            </ErrorBoundary>
        </MarginedRegion>
    );
}

export default Enrolment;