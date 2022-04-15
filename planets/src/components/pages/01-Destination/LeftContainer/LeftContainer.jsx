import {container, dim} from "./LeftContainer.module.css"
import europa from "../../../../assets/destination/image-europa.png"
import moon from "../../../../assets/destination/image-moon.png"
import mars from "../../../../assets/destination/image-mars.png"
import titan from "../../../../assets/destination/image-titan.png"


const LeftContainer = () => {
    let path = window.location.pathname.split("/")
    let position = path.length-1
    let confronto = path[position]
    let urlImg 

    switch(confronto) {
        case "Europa":
        urlImg = europa
        break;

        case "Moon":
        urlImg = moon
        break;

        case "Mars":
        urlImg = mars
        break;

        case "Titan":
        urlImg = titan
        break;
    }


    return (
        <div className={container}>
            <img src={urlImg} className={dim}/>
        </div>
    )
}

export default LeftContainer;