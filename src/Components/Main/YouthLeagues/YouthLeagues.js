import { useContext } from "react";

import styles from "./YouthLeagues.module.scss";

import MarginedRegion from "../MarginedRegion/MarginedRegion"
import Button from "../Button/Button";

import NavigationContext from "../../../Contexts/NavigationContext";

import img from "../../../assets/images/Youth League.jpg";

/**
 * This function renders the youth leagues' information.
 */
function YouthLeagues(){

    const {setPage} = useContext(NavigationContext);

    const onClick = () => {setPage("Enrolment")};
    
    return (
        <MarginedRegion type="article">
            <h1 className={styles.regionHeading}>Youth Leagues</h1>
            <p className={styles.regionText}>
                <img src={img} alt="Various youth league members playing football." className={styles.intextImg}/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet massa molestie, bibendum magna id, pulvinar est.
                In felis purus, lobortis at ex dictum, bibendum mattis diam. Cras vehicula nisl turpis, ut varius dui maximus at. Sed at
                turpis nec tellus semper mattis. Suspendisse nec nisl sit amet risus mollis vestibulum nec ut dolor. Pellentesque
                interdum molestie efficitur. Aliquam eget ornare lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br/><br/>
                Donec iaculis convallis leo, sit amet pretium dui tincidunt at. Maecenas tempor lacus libero, eu fringilla eros fringilla
                et. Nulla imperdiet metus ut vestibulum sodales. Quisque tincidunt mi in orci suscipit, sit amet posuere odio congue.
                Vestibulum ornare, ex sed euismod placerat, ex magna convallis nunc, non suscipit odio ex a mi. Aenean magna felis,
                eleifend aliquam pretium eget, iaculis ac magna. Etiam ultricies velit ultricies arcu hendrerit molestie. Nulla eu libero
                fermentum, lobortis massa in, egestas leo. Sed at condimentum quam, ut consectetur felis. Suspendisse ut odio porta, tempor
                tellus ut, porttitor arcu. Fusce pulvinar, sapien vitae gravida laoreet, leo velit scelerisque nisl, a dignissim elit enim
                ut quam. Vivamus nec felis nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                Proin ultricies dui lacus, eu consectetur ligula finibus a.
                <br/><br/>
                Etiam tempor est vel libero tempus convallis. In quis orci vel erat bibendum tincidunt tempor sit amet neque. Maecenas augue
                dui, ultricies vel egestas ac, rhoncus at odio. Suspendisse ut lacus facilisis libero blandit venenatis. Phasellus condimentum
                quam sit amet dui luctus, eget rhoncus mauris aliquam. Integer a dui vitae risus feugiat condimentum. Proin convallis id
                turpis id placerat. Fusce posuere massa ut nisl lacinia semper. In ut aliquet arcu. Integer egestas, diam et varius dapibus,
                urna leo tempus sem, ut vehicula odio tellus dictum dui. Etiam placerat elit mi, non laoreet ipsum malesuada ac. Pellentesque
                sem sapien, sodales non posuere quis, finibus eu ante. Vivamus tincidunt dictum rutrum.
                <br/><br/>
                Curabitur dignissim facilisis tristique. Integer in ante sit amet tellus mattis accumsan blandit vel turpis. Nullam sed sapien
                ac ligula tempor vehicula imperdiet nec nisi. Nam tristique volutpat tincidunt. Phasellus elit quam, vestibulum ut ultricies
                eget, blandit eget risus. Cras imperdiet urna sem, ut mollis nisl tempus a. Praesent quis nunc eros. Curabitur neque elit,
                viverra ac bibendum in, auctor pretium sem. Praesent non ex in mi porta commodo. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Ut ut tellus pulvinar, ultricies neque nec, sodales nunc. Ut ligula ligula, vehicula quis vestibulum eget,
                commodo nec tortor. Vivamus a libero vel tortor aliquam fermentum. In nec ligula non nibh malesuada dapibus ac at erat.
                Curabitur sed feugiat libero.
            </p>
            <Button onClick={onClick}>
                Expression of Interest Form
            </Button>
        </MarginedRegion>   
    );
}

export default YouthLeagues;