import ReactWeather from "react-open-weather";
import useOpenWeather from "./Patch/useOpenWeather";
import "./WeatherWidget.css";

import styles from "./Weather.module.scss";





/**
 * This function renders a google map of the club's location
 */
function Weather(){

    const { data, isLoading, errorMessage } = useOpenWeather({
        key : "1734519c487519ea73b031da20969ac9",
        lat : "-35.3475901",
        lon : "149.0398063",
        lang : "en",
        unit : "metric"
    });
    
    return (
        <section className={styles.embedSection}>
            <h1>Weather on the Pitch</h1>
            <div className={styles.weatherWidget}>
                <ReactWeather 
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang={"en"}
                    locationLabel={"Canberra FC - Stirling"}
                    showForecast={true}
                />
            </div>
        </section>
    );
}

export default Weather;