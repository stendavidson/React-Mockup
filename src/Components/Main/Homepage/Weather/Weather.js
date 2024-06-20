import ReactWeather from "react-open-weather";
import { ErrorBoundary } from 'react-error-boundary';
import { useContext } from "react";

import "./WeatherWidget.css";
import styles from "./Weather.module.scss";

import DefaultComponent from "../../../DefaultComponent/DefaultComponent";
import useOpenWeather from "./Patch/useOpenWeather";

import SearchContext from "../../../Contexts/SearchContext";



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

    const {headings} = useContext(SearchContext);
    
    return (
        <section className={styles.embedSection}>
            <h1 style={{"backgroundColor" : (headings.includes("Weather On The Pitch") ? "rgba(255, 255, 0, 0.5)" : "rgba(255, 255, 0, 0.0)")}}>Weather On The Pitch</h1>
            <div className={styles.weatherWidget}>
                <ErrorBoundary FallbackComponent={DefaultComponent} >
                    <ReactWeather 
                        isLoading={isLoading}
                        errorMessage={errorMessage}
                        data={data}
                        lang={"en"}
                        locationLabel={"Canberra FC - Stirling"}
                        showForecast={true}
                    />
                </ErrorBoundary>
            </div>
        </section>
    );
}

export default Weather;