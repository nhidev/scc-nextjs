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
