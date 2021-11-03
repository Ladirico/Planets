import SinglePage from "../../contents/singlePage/SinglePage";
import img from "../../../assets/home/background-home-desktop.jpg"
import Example from "../../contents/example/Example";

const Home = () => {
    return (
        <SinglePage bgImg={img} leftPart={"ciaoqg"} rigthPart={Example}></SinglePage>
    )
}
export default Home;