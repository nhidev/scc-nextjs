import styled from "styled-components";
import Link from "next/link";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

const CTASectionStyled = styled.section`
  padding: 10rem 0 0;
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
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .cta__hover-title span {
    color: #ffffff;
  }

  .cta__title {
    font-size: 4.8rem;
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

  .btn {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    height: 4.75rem;
    outline: none;
    overflow: hidden;
    margin: .5rem .5rem .5rem 0;
    padding: 0 2rem;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    transition: all .2s cubic-bezier(.25,.46,.45,.94);
    span {
      color:#000;
      display: block;
      line-height: 1;
      transition: all .4s cubic-bezier(.25,.46,.45,.94);
      white-space: normal;
    }
    i {
      display: block;
      width: 1.875rem;
      height: 1px;
      background: rgb(30 36 40);
      margin-left: 6rem;
      position: relative;
      transition: all .2s cubic-bezier(.25,.46,.45,.94);
      &:before {
        content: "";
        width: 15px;
        height: 1px;
        background: rgb(36 187 158);
        margin-left: -20px;
        display: block;
        transition: all .2s cubic-bezier(.25,.46,.45,.94);
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        left: 100%;
        width: 0;
        height: 0;
        border-top: 6px solid #fff;
        border-bottom: 6px solid #fff;
        border-left: 8px solid #1e2428;
        transition: all .2s cubic-bezier(.25,.46,.45,.94);
      }
    }
  }

  .btn:hover {
    span {
      color: rgb(30 36 40);
      transform: translateX(10px);
    } 
    i {
       background: #1e2428;
      &:before {
        background: rgb(255 255 255);
      }
      &:after {
        border-left-color: rgb(30 36 40);
      }
    }
  }
`;

const CTASection = () => {
  return (
    <CTASectionStyled>
      <Grid>
      <Row>
        <Col xs={12} className="scc_wrapper">
          <Row center="xs">
            <Col xs={10}>
              <h1>Anyone can climb</h1>
              <p>Located in Binh Thanh District this centre is +8000 square ft of huge climbing space. Our purpose built, climbing centre caters for all ages and abilities. Experienced climbers can refine their skills on the lead walls and improve strength and core training on the Moonboard. New climbers of all ages can learn in a safe and fun environment. The centre also includes full amenties, a café, shower facilities and classes.</p> 

              {/* <h1>We’re a community of climbers –<br/> at every experience level.</h1>
              <p>From novice to expert and everything in between, there’s a spot for you at SCC. See how you can fit into our community!</p>  */}
            </Col>
           </Row>
          </Col>
        </Row>
        <Row>
          <Col className="cta__box" xs={12} sm={4}>
            <div className="cta cover-bg bg--black colour--white">
              <img
                className="cover-bg__img"
                src="/images/new-to-climbing.jpg"
                alt="new to climbing"
              />
              <div className="cta__inner">
                <p className="cta__title">
                  FIST <span>VISIT</span>
                </p>
              </div>
              <div className="cta__hover text--center">
                <p className="cta__hover-title">
                Enjoy climbing for your first time at Saigon Climbing Center!
                </p>
                <Link href="/first-visit">
                  <a className="btn btn--white">
                  <span>First Visit</span><i></i>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
          <Col className="cta__box" xs={12} sm={4}>
            <div className="cta cover-bg bg--black colour--white">
              <img
                className="cover-bg__img"
                src="/images/members-prices.jpg"
                alt="member"
              />
              <div className="cta__inner">
                <p className="h2 cta__title">
                MEMBER<span>& PRICES</span>
                </p>
              </div>
              <div className="cta__hover text--center">
                <p className="cta__hover-title">
                Find out how to get climbing with us and the various options and prices that are available to you.
                </p>
                <span  className="btn btn--white btn--small">
                  <span>Join</span><i></i>
                </span>
              </div>
            </div>
          </Col>
          <Col className="cta__box" xs={12} sm={4}>
            <div className="cta cover-bg bg--black colour--white">
              <img
                className="cover-bg__img"
                src="/images/parties-group.jpg"
                alt="/images/parties group"
              />
              <div className="cta__inner">
                <p className="cta__title">
                  PARTIES<span>& GROUP</span>
                </p>
              </div>
              <div className="cta__hover text--center">
                <p className="cta__hover-title">
                Get a group of your favorite adventurers of any age together for a day of conquering vertical challenges and all-around fun.
                </p>
                <span className="btn btn--white btn--small">
                  <span>View more</span><i></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </CTASectionStyled>
  );
};

export default CTASection;
