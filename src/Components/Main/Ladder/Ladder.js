import { useContext } from "react";

import styles from "./Ladder.module.scss";

import MarginedRegion from "../MarginedRegion/MarginedRegion"

import SearchContext from "../../Contexts/SearchContext";


/**
 * This function renders the league ladder page.
 */
function Ladder(){

    const {headings} = useContext(SearchContext);
    
    return (
        <MarginedRegion type="section">
            <h1 className={styles.regionHeading} style={{"backgroundColor" : (headings.includes("Ladder") ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0.0)")}}>Ladder</h1>
            <table className={styles.ladder}>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>No.</th>
                        <th>Wins</th>
                        <th>Draws</th>
                        <th>Losses</th>
                        <th>Diff</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                </tbody>
            </table>
        </MarginedRegion>   
    );
}

export default Ladder;