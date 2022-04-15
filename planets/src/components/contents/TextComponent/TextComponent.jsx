import {wrapperTxts, separator} from './TextComponent.module.css'

const TextComponent = ({txt}) => {
console.log(txt)
    return (
        <div className={wrapperTxts}>
            {txt[0]!==""?<h4>{txt[0]}</h4>:<div className={separator}></div>}
            <h1>{txt[1]}</h1>
            <p>{txt[2]}</p>
        </div>
    )
}

export default TextComponent;