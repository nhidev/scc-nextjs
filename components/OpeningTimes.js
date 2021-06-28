import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Map from './Map';

const OpeningTimesStyled = styled.section`
  padding: 20rem 0;
  /* clip-path: polygon(0 10rem, 100% 0, 100% calc(100% - 10rem), 0 100%); */
  margin-top: -10rem;
  margin-bottom: -10rem;
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
      margin-bottom: 2rem;
      max-width: 90%;
    }
  }
  @media (min-width: 768px) {
    .block-text {
      .bg-overlay {
        position: absolute;
        padding: 3rem 6rem;
        width: 60rem;
        height: 40rem;
        left: 1rem;
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
      img {
        height: 60rem;
      }
    }
  }
  `;

const OpeningTimes = ({ t }) => {  
  return (
    <OpeningTimesStyled>
      <Grid>
        <Row>
          <Col className="block-text" xs={12} sm={5}>
            <div className="bg-overlay">
              <h2>OPENING <br/>TIMES</h2>
              <div>
                <p>Mon – Friday: 09:00 – 21:00 <br/>
                Saturday and Sunday: 09:00 – 22:00 </p>

                <p>Saigon Climbing Center <br/>
                HCM: 168/42 Nguyen Gia Tri Street, Ward 25, Binh Thanh District<br/>
                HN: 36 Tay Ho Street, Quang An Ward, Tay Ho District</p>
                <p>Email us: saigonclimbing@gmail.com</p>
                <p>Call us: HCM 0888.222.045 – HN 0966.22.18.22</p>
              </div>
            </div>
          </Col>
          <Col className="location" xs={12} sm={7}>
            <Map />
          </Col>
        </Row>
      </Grid>
    </OpeningTimesStyled>
  );
};

export default OpeningTimes;
