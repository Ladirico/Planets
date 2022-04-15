import { useEffect, useState } from "react";
import { dest } from "../../../api/api";
import backg from "../../../assets/destination/background-destination-desktop.jpg"
import SinglePage from "../../contents/singlePage/SinglePage";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

const Destination = () => {
    const [des, setDes] = useState([])

    useEffect(() => {
        dest().then(res=> setDes(res))
    },[])

    return (
        <SinglePage bgImg={backg} underTitle={["01", "pick your destination"]} rigthPart={<RightContainer destinations={des}/>} leftPart={<LeftContainer/>}></SinglePage>
    )
}
export default Destination;