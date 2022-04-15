import {
  container,
  secondContainer,
  TitleContainer,
  underWrapper,
  left,
  right,
  underTitleCss1,
  underTitleCss,
} from "./SinglePage.module.css";

const SinglePage = ({ bgImg, underTitle, leftPart, rigthPart }) => {
  return (
    <div className={container} style={{ backgroundImage: `url(${bgImg})` }}>
      <div className={secondContainer}>
        <div className={TitleContainer}>
          {underTitle !== undefined ? (
            <span>
              <h4 className={underTitleCss1}>{underTitle[0]}</h4>{" "}
              <h4 className={underTitleCss}>{underTitle[1]}</h4>
            </span>
          ) : (
            <h4 className={underTitleCss}></h4>
          )}
        </div>

        <div className={underWrapper}>
          <div className={left}>{leftPart}</div>
          <div className={right}>{rigthPart}</div>
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
