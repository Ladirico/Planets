import Contents from "../Contents/Contents";
import DestinationNavbar from "../DestinationNavbar/DestinationNavbar";

const RightContainer = ({destinations}) => {
    return (
        <div>
        <DestinationNavbar destinations={destinations}/>
        <Contents destinations={destinations}/>
        </div>
      
    )
}

export default RightContainer;