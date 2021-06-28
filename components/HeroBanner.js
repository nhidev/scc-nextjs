import { useTranslation } from "next-i18next";
import Link from "next/link";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

const HeroBannerStyled = styled.div`
  background-image: linear-gradient(180deg,rgb(47 52 60 / 60%),rgb(47 52 60 / 60%)),url(${props => props.imgSrc});
  background-position: 0 0,50% 50%;
  background-size: auto,cover;
  background-repeat: repeat,no-repeat;
  background-color: #1e2428;
  max-height: 80vh;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  /* clip-path: polygon(0 10rem, 100% 0, 100% calc(100% - 10rem), 0 100%); */
  margin-top: -10rem;
  margin-bottom: 10rem;
  min-height: 60rem;

  .hero-banner_txt {
    > * {
      transform: translateY(80px);
      opacity: 0;
      animation: fadeUp 1s ease-out forwards;
    }
    h1 {
      margin-top: 9rem;
      color: #fff;
      font-size: 4rem;
      text-transform: uppercase;
      span {
        display: block;
        -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #ffffff;
      }
    }
    p {
      color: #fff;
      font-size: 2rem;
      margin-bottom: 3rem;
    }
    
  }
 
  .btn--green {
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 2rem 3rem;
    outline: none;
    background-color: #24bb9e;
    cursor: pointer;
    transition: background-color 0.3s;
    height: 7rem;
    text-decoration: none;
    span {
      color: #fff;
      display: block;
      line-height: 1;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      white-space: normal;
      text-transform: uppercase;
    }
    i {
      display: block;
      width: 1.875rem;
      height: 1px;
      background: #fff;
      margin-left: 6rem;
      position: relative;
      transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      &:before {
        content: "";
        width: 1.5rem;
        height: 1px;
        background: #fff;
        margin-left: -2rem;
        display: block;
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        left: 100%;
        width: 0;
        height: 0;
        border-top: 6px solid rgb(0 0 0 / 0%);
        border-bottom: 6px solid rgb(0 0 0 / 0%);
        border-left: 8px solid rgb(255 255 255);
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-left-color: rgb(255 255 255);
      }
    }
    &:hover {
      background: #fff;
      box-shadow: inset 0 0 0 1px #fff;
      span {
        color: #1e2428;
        transform: translateX(1rem);
      }
      i {
        background: #1e2428;
        &:before {
          background: #1e2428;
        }
        &:after {
          border-left-color: #1e2428;
        }
      }
    }
  }

  .hero-banner_txt {
    h1 span:nth-child(2) {
      animation-delay: 0.2s;
    }
    h1 span:nth-child(3) {
     animation-delay: 0.5s;
    }
    p {
      animation-delay: 0.8s;
    }
    .btn--green {
      animation-delay: 1s;
    }
  }

  @keyframes fadeUp {
    0% {
      transform: translateY(80px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    align-items: flex-end;
    padding-bottom: 20rem;
    .hero-banner_txt {
      h1 {
        font-size: 7rem;
      }
    }
  }
`;

const HeroBanner = (props) => {
  const {
    title1,
    title2,
    title3,
    description,
    linkText,
    linkUrl,
    imgSrc,
  } = props;

  return (
    <HeroBannerStyled imgSrc={imgSrc}>
      <Grid>
        <Row>
          <Col xs={12}>
            <div className="hero-banner_txt">
              <h1>
                {title1}
                {title2 && <span>{title2}</span>}
                {title3 && <span>{title3}</span>}
              </h1>
              <p> {description}</p>
              {linkText && (
                <Link href={linkUrl}>
                  <a className="btn btn--green">
                    <span>{linkText}</span> <i />
                  </a>
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </Grid>
    </HeroBannerStyled>
  );
};

export default HeroBanner;
