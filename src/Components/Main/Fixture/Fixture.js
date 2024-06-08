import styles from "./Fixture.module.scss";

import MarginedRegion from "../MarginedRegion/MarginedRegion"


/**
 * This function renders the league ladder page.
 */
function Fixture(){
    
    return (
        <MarginedRegion type="section">
            <h1 className={styles.regionHeading}>Fixture</h1>
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