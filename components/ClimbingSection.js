import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

const ClimbingSectionStyled = styled.section`
  /* padding: 5rem; */
  .scc_wrapper {
   display: block;
   margin-bottom: 10rem; 
   text-align: center;
   h1 {
    text-transform: uppercase;
     margin-bottom: 3rem;
   }
  }
  .cta {
    display: block;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
  }
  .cta:hover .cta__hover {
    opacity: 1;
  }
  .cta__box {
    position: relative;
    margin-bottom: 2.4rem;
  }
  .cta__hover,
  .cta__inner {
    position: absolute;
    padding: 1.875rem;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

  .cta__hover {
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .cta__inner--center {
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .cover-bg {
    position: relative;
    color: #ffffff;
  }

  .cover-bg__img {
    left: 0;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: center;
    top: 0;
    width: 100%;
    z-index: 0;
  }
  .cta__hover-title {
    display: block;
    padding: 0;
    font-size: 1.8rem;
    text-align: center;
    
  }

  .cta__hover-title {
    width: 100%;
  }

  .cta__hover-title span {
    color: #ffffff;
  }

  .cta__title {
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 1;
    color: #ffffff;
    display: block;
    padding: 0;
    text-transform: uppercase;
    margin: 0;
    span {
      display: block;
      margin-left: 3rem;
      -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #ffffff;
    }
  }

`;

const ClimbingSection = ({ t }) => {
  return (
    <ClimbingSectionStyled>
      <Grid>
        <Row>
        <Col xs={12} className="scc_wrapper">
          <Row center="xs">
            <Col xs={10}>
            <h1>Ready to climb?</h1>
            <p>From novice to expert and everything in between, there’s a spot for you at SCC. See how you can fit into our community!</p> 
            </Col>
          </Row>
          </Col>
        </Row>
        <Row>
          <Col className="cta__box" xs={12} sm={6} md={3}>
            <a href="" className="cta cover-bg bg--black colour--white">
              <img
                className="cover-bg__img"
                src="/images/lead-climbing.jpg"
                src="/images/boudering.jpg"
                alt="boudering"
              />
              <div className="cta__inner">
                <p className="cta__title">
                  BOULDERING<span>TRAVERSING</span>
                </p>
              </div>
              <div className="cta__hover text--center">
                <p className="h4 cta__hover-title">
                Lower level climbing with no ropes. It is often up to 5m in height and needs only climbing shoes and chalk.
                </p>
              </div>
            </a>
          </Col>
          <Col className="cta__box" xs={12} sm={6} md={3}>
            <a href="" className="cta cover-bg bg--black colour--white">
              <img
                className="cover-bg__img"
                src="/images/toprope.jpg"
                alt="toprope"
              />
              <div className="cta__inner">
                <p className="cta__title">
                  TOP <span>ROPE</span>
                </p>
              </div>
              <div className="cta__hover text--center">
                <p className="h4 cta__hover-title">
                Our 15m walls cater for all abilities, from novices through to GB climbers!
                </p>
              </div>
            </a>
          </Col>
          <Col className="cta__box" xs={12} sm={6} md={3}>
            <a href="" className="cta cover-bg bg--black colour--white">
              <img
                className="cover-bg__img"
                src="/images/lead-climbing.jpg"
                alt="lead-climbing"
              />
              <div className="cta__inner">
                <p className="cta__title">
                  LEAD <span>CLIMBING</span>
                </p>
              </div>
              <div className="cta__hover text--center">
                <p className="h4 cta__hover-title">
                Lead climbing is a climbing style, predominantly used in rock climbing. In a roped party one climber has to take the lead while the other climbers follow. 
                </p>
              </div>
            </a>
          </Col>
          <Col className="cta__box" xs={12} sm={6} md={3}>
            <a href="" className="cta cover-bg bg--black colour--white">
              <img
                className="cover-bg__img"
                src="/images/moonboard.jpg"
                alt="moonboard"
              />
              <div className="cta__inner">
                <p className="cta__title">
                  MOONBOARD<span>TRAINING</span>
                </p>
              </div>
              <div className="cta__hover text--center">
                <p className="h4 cta__hover-title">
                Increase your climbing performance with Moonboard 2019
                </p>
              </div>
            </a>
          </Col>
        </Row>
      </Grid>
    </ClimbingSectionStyled>
  );
};

export default ClimbingSection;
