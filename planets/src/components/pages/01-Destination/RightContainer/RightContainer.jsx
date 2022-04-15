import DestinationNavbar from "../RightContainer/DestinationNavbar/DestinationNavbar"
import Contents from "../RightContainer/Contents/Contents"
import UnderlyingInfo from "./UnderlyingInfo/UnderlyingInfo"
const RightContainer = ({destinations}) => {
    return (
        <div>
        <DestinationNavbar destinations={destinations}/>
        <Contents destinations={destinations}/>
        <UnderlyingInfo destinations={destinations}/>
        </div>
      
    )
}

export default RightContainer;