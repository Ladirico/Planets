import TextComponent from "../../../contents/TextComponent/TextComponent"

import { Switch, Route } from "react-router-dom";
import LeftContainer from "../LeftContainer/LeftContainer";
const Contents = ({ destinations }) => {
    console.log(destinations)
    let cont = []

    return (
        <div>
            <Switch>
                {destinations.map((el, index) => {
                    cont = ["", el.name, el.description]
                    return (
                        <Route exact path={`/destination/${el.name}`}>
                            <TextComponent txt={cont} />
                        </Route>

                    )
                })}

            </Switch>
        </div>

    )
}

export default Contents;

/*
                 {destinations.length>0?
            <Switch>
                <Route exact path={`/destination/Moon`}>
                    <TextComponent txt={["", destinations[0].name, destinations[0].description]} />
                </Route>
                <Route path={`/destination/Mars`}>
                    <TextComponent txt={["", destinations[1].name, destinations[1].description]} />
                </Route>
                <Route path={`/destination/Europa`}>
                    <TextComponent txt={["", destinations[2].name, destinations[2].description]} />
                </Route>
                <Route path={`/destination/Titan`}>
                    <TextComponent txt={["", destinations[3].name, destinations[3].description]} />
                </Route>
            </Switch>:
            <div>Caricamento</div>
            }

            */