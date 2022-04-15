import { Link } from "react-router-dom";
import { container, divStyle, noUnderLine } from "./DestinationNavbar.module.css";


const DestinationNavbar = ({destinations}) => {

    return (
        <div className={container}>
            {destinations.map((el, index) => {
                return(
                <div key={index} className={divStyle}>
                 <Link to= {`/destination/${el.name}`} className={noUnderLine}><span>{el.name}</span></Link>
            </div>
            
            )})}
        </div>
    )
    
}

export default DestinationNavbar;

/*    <div className={container}>
            {destinations.map((el, index) => {
                return(
                <div className={divStyle}>
                 <Link to= {`/destination/${el.name}`} className={noUnderLine}><span>{el.name}</span></Link>
            </div>
            
            )})}
        </div> */