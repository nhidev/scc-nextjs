import { useTranslation } from "next-i18next";
import Link from "next/link";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

const BannerFurtherStyled = styled.div`
  min-height: 70rem;
  .banner-content > * {
    transform: translateY(80px);
    opacity: 0;
    animation: fadeUp 1s ease-out forwards;
  }
  .banner-content h1 {
    color: #fff;
    font-size: 7rem;
    text-transform: uppercase;
    span {
      display: block;
      -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #ffffff;
    }
  }
  .banner-content p {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  .banner-content .btn-link {
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
    height: 5rem;
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
  }
  .banner-content .btn-link:hover {
    background: #fff;
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

  .banner-content h1 span:nth-child(2) {
    animation-delay: 0.2s;
  }
  .banner-content h1 span:nth-child(3) {
    animation-delay: 0.5s;
  }
  .banner-content p {
    animation-delay: 0.8s;
  }
  .banner-content .btn-link {
    animation-delay: 1s;
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
  .banner-hero {
    background-size: cover;
    display: block;
    position: relative;
    /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 23%); */
    z-index: -1;
    img {
      opacity: 1;
      transition: opacity 1s ease-out;
    }
  }
`;

const BannerFurther = (props) => {
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
    <BannerFurtherStyled>
      <Row>
        <Col xs={12} sm={6}>
          <div className="banner-content">
          <h1>
              {title1}
              {title2 && <span>{title2}</span>}
              {title3 && <span>{title3}</span>}
            </h1>
            <p> {description}</p>
            {linkText && (
              <Link href={linkUrl}>
                <a className="btn btn-link">
                  <span>{linkText}</span> <i />
                </a>
              </Link>
            )}
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <picture className="banner-hero">
            <img src={imgSrc} alt="banner hero" />
          </picture>
        </Col>
        </Row>
    </BannerFurtherStyled>
  );
};

export default BannerFurther;
