import ImageCarousel from "./ImageCarousel/ImageCarousel";
import Promotions from "./Promotions/Promotions";
import AboutUs from "./AboutUs/AboutUs";
import Weather from "./Weather/Weather";
import Map from "./Map/Map";


import image1 from "../../../assets/images/Soccer Highlights 1.png";
import image2 from "../../../assets/images/Soccer Highlights 2.png";
import image3 from "../../../assets/images/Soccer Highlights 3.png";
import image4 from "../../../assets/images/Soccer Highlights 4.png";
import image5 from "../../../assets/images/Soccer Highlights 5.png";

/**
 * This function renders the homepage to the screen.
 */
function Homepage(){

    return (
        <>
            <ImageCarousel images={
            [{
                    path : image1,
                    alt : "Lorem ipsum dolor sit amet",
                    caption : "Lorem ipsum consectetur adipiscing elit"
                },
                {
                    path : image2,
                    alt : "Lorem ipsum turpis leo rhoncus libero",
                    caption : "Lorem ipsum nibh vel posuere vehicula"
                },
                {
                    path : image3,
                    alt : "Lorem ipsum efficitur sit amet felis",
                    caption : "Lorem ipsum viverra est ut lorem"
                },
                {
                    path : image4,
                    alt : "Lorem ipsum egestas cursus libero a fringilla",
                    caption : "Lorem ipsum malesuada fames ac turpis egestas"
                },
                {
                    path : image5,
                    alt : "Lorem ipsum in auctor enim consectetur a",
                    caption : "Lorem ipsum convallis eu condimentum non"
                }]
            }/>
            <Promotions promotions={
                [{
                    title : "Lorem ipsum 1",
                    body : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ex,
                            pretium vel pellentesque a, cursus non urna.`
                },
                {
                    title : "Lorem ipsum 2",
                    body : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ex,
                            pretium vel pellentesque a, cursus non urna.`
                },
                {
                    title : "Lorem ipsum 3",
                    body : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ex,
                            pretium vel pellentesque a, cursus non urna.`
                },
                {
                    title : "Lorem ipsum 4",
                    body : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ex,
                            pretium vel pellentesque a, cursus non urna.`
                },
                {
                    title : "Lorem ipsum 5",
                    body : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla ex,
                            pretium vel pellentesque a, cursus non urna.`
                }]
            }/>
            <AboutUs/>
            <Weather/>
            <Map/>
        </>
    );
}

export default Homepage;