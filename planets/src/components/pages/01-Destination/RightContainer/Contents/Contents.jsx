import TextComponent from "../../../../contents/TextComponent/TextComponent"
import { Switch, Route } from "react-router-dom";

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

