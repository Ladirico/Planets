import { container, secondContainer } from './ContentContainer.module.css'
import backg from "../../../../assets/home/background-home-desktop.jpg"
import Home from '../../../../components/pages/00-Home/Home'
import Destination from '../../../pages/01-Destination/Destination'
import Crew from "../../../pages/02-Crew/Crew"
import Technology from "../../../pages/03-Technology/Technology"
import { Route, Switch } from "react-router-dom";
const ContentContainer = () => {
    return (
        <div className={container}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/destination" component={Destination}/>
                    <Route path="/crew" component={Crew}/>
                    <Route path="/technology" component={Technology}/>
                </Switch>

        </div>


    )
}
export default ContentContainer;
/*style={{
            backgroundImage: `url(${backg})`
        }} */