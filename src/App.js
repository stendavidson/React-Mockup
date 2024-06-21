import { useState}  from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

import NavigationContext from './Components/Contexts/NavigationContext';
import SearchContext from './Components/Contexts/SearchContext';



/**
 * This function returns the encapsulated react application.
 */
function App() {
    
    // Screate application context states
    const [results, setResults] = useState([]);
    const [page, setPage] = useState("Homepage");
    const [displayState, setDisplayState] = useState("none");
    const [headings, setHeadings] = useState([]);

    // A list of searchable assets is kept - ideally this would actually
    // be linked to a database of page content and dynamically retrieved.
    const SEARCHABLE_COMPONENTS = [
        {
            page : "Homepage",
            title : "Upcoming Events"
        },
        {
            page : "Homepage",
            title : "About Us"
        },
        {
            page : "Homepage",
            title : "Weather On the Pitch"
        },
        {
            page : "Homepage",
            title : "Where To Find Us"
        },
        {
            page : "News",
            title : "News"
        },
        {
            page : "News",
            title : "Lorem ipsum dolor sit amet"
        },
        {
            page : "News",
            title : "Lorem ipsum carpe dium"
        },
        {
            page : "Fixture",
            title : "Fixture"
        },
        {
            page : "Ladder",
            title : "Ladder"
        },
        {
            page : "Highlights",
            title : "Highlights"
        },
        {
            page : "Youth Leagues",
            title : "Youth Leagues"
        },
        {
            page : "Contact Us",
            title : "Contact Us"
        },
        {
            page : "Contact Us",
            title : "Send Us A Message"
        },
        {
            page : "Enrolment",
            title : "Expression of Interest"
        },
        {
            page : "Privacy Statement",
            title : "Privacy Statement"
        },
        {
            page : "Terms & Conditions",
            title : "Terms & Conditions"
        }
    ]

    /**
     * This function performs a search of all searchable assets on the website.
     * 
     * @param searchTerm the search term is used to filter all searchable assets on the website.
     */
    function siteSearch(searchTerm){

        // Input validation
        if(typeof(searchTerm) !== "string"){
            throw new TypeError("Invalid input parameter 'searchTerm' must be a string.");
        }

        let results = [];
        
        // The search is performed
        if(searchTerm !== ""){
            results = SEARCHABLE_COMPONENTS.filter((searchable) => searchable.title.toLowerCase().includes(searchTerm.toLowerCase()))
            results.sort((a,b) => a.title.localeCompare(b.title))
        }

        // The search results are passed to the necessary contexts.
        setHeadings(results.map((result) => result.title));
        setResults(results);
    }


    return (
        <SearchContext.Provider value={{
                displayState : displayState, 
                setDisplayState : setDisplayState, 
                siteSearch : siteSearch, 
                results : results,
                headings : headings,
                setHeadings : setHeadings
            }}>
            <NavigationContext.Provider value={{
                    page : page, 
                    setPage : setPage
                }}>
                <Header/>
                <Main page={page}/>
                <Footer/>
            </NavigationContext.Provider>
        </SearchContext.Provider>
    );
}

export default App;
