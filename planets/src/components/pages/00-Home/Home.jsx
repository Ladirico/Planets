import SinglePage from "../../contents/singlePage/SinglePage";
import img from "../../../assets/home/background-home-desktop.jpg"
import Example from "../../contents/example/Example";
import TextComponent from "../../contents/TextComponent/TextComponent";

const Home = () => {

    const testo = ["so, you want to travel to", 
    "space", 
    "let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly of this world experience"]

    return (
        <SinglePage bgImg={img} leftPart={<TextComponent txt={testo}/>}></SinglePage>
    )
}
export default Home;