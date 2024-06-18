import styles from "./Main.module.scss";

import Homepage from "./Homepage/Homepage";
import News from "./News/News";
import Fixture from "./Fixture/Fixture";
import Ladder from "./Ladder/Ladder";
import Highlights from "./Highlights/Highlights";
import YouthLeagues from "./YouthLeagues/YouthLeagues";
import Enrolment from "./Enrolment/Enrolment";
import ContactUs from "./ContactUs/ContactUs"; 
import PrivacyStatement from "./PrivacyStatement/PrivacyStatement";
import TermsConditions from "./TermsConditions/TermsConditions";



/**
 * This function renders the main section of the web app and sets the tab title
 * 
 * @param page The current page to be rendered.
 */
function Main({page}){

    // Input validation
    if(typeof(page) !== "string"){
        throw new TypeError("Invalid input parameter 'page' must be a string.");
    }

    const title = "Canberra FC | ";

    let currentPage;

    switch(page){
        case "Homepage":
            currentPage = <Homepage/>
            break;
        case "News":
            currentPage = <News/>;
            break;
        case "Fixture":
            currentPage = <Fixture/>;
            break;
        case "Ladder":
            currentPage = <Ladder/>;
            break;
        case "Highlights":
            currentPage = <Highlights/>;
            break;
        case "Youth Leagues":
            currentPage = <YouthLeagues/>;
            break;
        case "Enrolment":
            currentPage = <Enrolment/>;
            break;
        case "Contact Us":
            currentPage = <ContactUs/>;
            break;
        case "Privacy Statement":
            currentPage = <PrivacyStatement/>;
            break;
        case "Terms & Conditions":
            currentPage = <TermsConditions/>;
            break;
        default:
            currentPage = null;
    }

    document.title = title + page;

    return (
        <main className={styles.mainSection}>
            {currentPage}
        </main>
    );
}

export default Main;