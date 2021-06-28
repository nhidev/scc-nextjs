import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Image from 'next/image';

const FacilitiesSectionStyled = styled.section`
  position: relative;
  padding: 10rem 0 15rem;
  &:after {
    background-color: #ececec;
    content: "";
    position: absolute;
    width: 100vw;
    left: 0;
    top: -30rem;
    height: calc(100% + 30rem);
    clip-path: polygon(0 10rem, 100% 0, 100% calc(100% - 10rem), 0 100%);
    z-index: -1;
  }
  
  .fac__box {
    position: relative;
    margin-bottom: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h4 {
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 1.2rem;
  }
  .icon {
    display: block;
    width: 8rem;
    height: 8rem;
    background-size: contain;
    margin-bottom: 1.2rem;
    &.icon--top-rope {
      background: url("/images/toprope-icon.svg") no-repeat center;
    }
    &.icon--lead {
      background: url("/images/lead-icon.svg") no-repeat center;
    }
    &.icon--bouldering {
      background: url("/images/bouldering-icon.svg") no-repeat center;
    }
    &.icon--shop {
      background: url("/images/shop-icon.svg") no-repeat center;
    }
  }

  .fac__strip {
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100vw;
    height: 13rem;
    object-fit: cover;
    filter: invert(0.93);
    overflow: hidden;
    max-width: initial;
  }  
`;

const FacilitiesSection = () => {
  return (
    <FacilitiesSectionStyled>
      <Grid>
        <Row>
          <Col className="fac__box" xs={12} sm={6} md={3}>
            <div className="column-icon">
              <span className="icon icon--top-rope"/>
            </div>
            <h4>120</h4>
            <p>
              Of the best top rope &amp; auto belay routes, varying from
              beginner to advanced.
            </p>
          </Col>
          <Col className="fac__box" xs={12} sm={6} md={3}>
            <div className="column-icon">
              <span className="icon icon--lead" />
            </div>
            <h4>75</h4>
            <p>
              Premium lead routes catering for all grades.
            </p>
          </Col>
          <Col className="fac__box" xs={12} sm={6} md={3}>
            <div className="column-icon">
              <span className="icon icon--bouldering" />
            </div>
            <h4>160</h4>
            <p>
              Boulder problems to challenge every level.
            </p>
          </Col>
          <Col className="fac__box" xs={12} sm={6} md={3}>
            <div className="column-icon">
              <span className="icon icon--shop" />
            </div>
            <h4>SHOP</h4>
            <p>Shop with all the latest gear.</p>
          </Col>
        </Row>
      </Grid>
      {/* <Image
        className="fac__strip"
        src="/fac-bottom-strip.svg"
        alt="fac strip"
      /> */}
    </FacilitiesSectionStyled>
  );
};

export default FacilitiesSection;
