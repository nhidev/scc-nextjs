import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Link from "next/link";
import Image from 'next/image';

const BlockImageStyled = styled.section`
  padding: 20rem 0;
  /* clip-path: polygon(0 10rem, 100% 0, 100% calc(100% - 10rem), 0 100%); */
  overflow: hidden;
  .block-text {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
    .bg-overlay {
      color: #fff;
      background-color: #1e2428;
      padding: 3.2rem;
      margin: auto;
    }
    h2 {
      margin-bottom: 4rem;
    }
    p {
      line-height: 2;
      margin-bottom: 4rem;
      max-width: 90%;
    }
  }

  .block-image {
    img {
      width: 100%;
      max-height: 60rem;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    .block-text {
      .bg-overlay {
        position: absolute;
        padding: 6rem;
        width: 60rem;
        height: 40rem;
        left: 0;
        top: 0;
        bottom: 0;
      
      }
    }
    .block-image {
      height: calc(100% + 7.5rem);
      margin-left: -50%;
      margin-top: -3.75rem;
      margin-bottom: -3.75rem;
      width: 150%;
      z-index: -1;
    }
  }

`;

const BlockImage = (props) => {
  const { title, description, description2, linkText, linkUrl, imgSrc, ltr=false } = props;
  return (
    <BlockImageStyled className={ltr ? "ltr": ""}>
      <Grid>
        <Row>
          <Col className="block-text" xs={12} sm={6}>
            <div className="bg-overlay">
              <h2>{title}</h2>
              <p>{description}</p>
              {description2 && <p>{description2}</p>}
              {linkText && (
                <Link href={linkUrl} >
                  <a className="btn btn--white-keyline">
                    <span>{linkText}</span>
                    <i></i>
                  </a>
                </Link>
              )}
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="block-image">
              <Image src={imgSrc}  alt="block image" width="1035"
                height="600"/>
            </div>
          </Col>
        </Row>
      </Grid>
    </BlockImageStyled>
  );
};

export default BlockImage;
