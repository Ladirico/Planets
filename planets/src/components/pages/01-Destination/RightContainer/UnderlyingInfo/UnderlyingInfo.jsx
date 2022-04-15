import { container, leftWrContainer, upperWr, lowerWr, rightWrContainer } from "./UnderlyingInfo.module.css"

const UnderlyingInfo = ({ destinations }) => {
    let path = window.location.pathname.split("/")
    let position = path.length - 1
    let confronto = path[position]
    console.log(confronto)
    return (
        <>
            {destinations.length !== 0 ? destinations.map((el, index) => {
                if(el.name === confronto){
                    return (
                        <div className={container}>
                        <div className={leftWrContainer}>
                            <span className={upperWr}>Avg. distance</span>
                            <span className={lowerWr}>{el.distance}</span>
                        </div>
                        <div className={rightWrContainer}>
                            <span className={upperWr}>est. travel time</span>
                            <span className={lowerWr}>{el.travel}</span>
                        </div>
                    </div>
                    )
                }}) :
                <div>ciao comba</div>}

        </>
    )
}

export default UnderlyingInfo;