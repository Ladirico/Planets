import backg from "../../../assets/crew/background-crew-desktop.jpg"
import SinglePage from "../../contents/singlePage/SinglePage";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

const Crew = () => {
    return (
            <SinglePage bgImg={backg} underTitle={["02", "meet your crew"]} leftPart={<LeftContainer/>} rigthPart={<RightContainer/>}></SinglePage>
        )
}
export default Crew;