import styled from "styled-components";
import {container, underWrapper, left, right} from "./SinglePage.module.css"

const SinglePage = ({bgImg, leftPart, rigthPart}) => {
console.log(rigthPart)

    return (
        <div className={container} style={{backgroundImage: `url(${bgImg})`}}>
            <div className={underWrapper}>
                <div className={left}>{leftPart}</div>
                <div className={right}>{rigthPart}</div>
            </div>
        </div>
    )
}
export default SinglePage;