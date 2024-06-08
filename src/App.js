import { useState}  from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

import NavigationContext from './Contexts/NavigationContext';
import SearchContext from './Contexts/SearchContext';


function App() {

    const [page, setPage] = useState("Homepage");
    const [displayState, setDisplayState] = useState("none");

    return (
        <SearchContext.Provider value={{displayState : displayState, setDisplayState : setDisplayState, siteSearch : () => {console.log("temp")}, results : []}}>
            <NavigationContext.Provider value={{page : page, setPage : setPage}}>
                <Header/>
                <Main page={page}/>
                <Footer/>
            </NavigationContext.Provider>
        </SearchContext.Provider>
    );
}

export default App;
