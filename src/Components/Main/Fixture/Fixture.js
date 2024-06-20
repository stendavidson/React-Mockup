import { useContext } from "react";

import styles from "./Fixture.module.scss";

import MarginedRegion from "../MarginedRegion/MarginedRegion"

import SearchContext from "../../Contexts/SearchContext";


/**
 * This function renders the league ladder page.
 */
function Fixture(){

    const {headings} = useContext(SearchContext);
    
    return (
        <MarginedRegion type="section">
            <h1 className={styles.regionHeading} style={{"backgroundColor" : (headings.includes("Fixture") ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0.0)")}}>Fixture</h1>
            <table className={styles.fixture}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Home</th>
                        <th>vs</th>
                        <th>Visitor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td>
                    </tr>
                </tbody>
            </table>
        </MarginedRegion>   
    );
}

export default Fixture;