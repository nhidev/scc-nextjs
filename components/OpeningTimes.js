import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Map from './Map';

const OpeningTimesStyled = styled.section`
  padding: 20rem 0;
  clip-path: polygon(0 10rem, 100% 0, 100% calc(100% - 10rem), 0 100%);
  margin-top: -10rem;
  margin-bottom: -10rem;
  overflow: hidden;
  .opening-times {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;
    .bg-overlay {
      color: #fff;
      background-color: #1e2428;
      position: absolute;
      padding: 6rem;
      width: 60rem;
      height: 40rem;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    h2 {
        margin-bottom: 2rem;
      }

      p {
        line-height: 2;
        margin-bottom: 2rem;
        max-width: 40rem;
      }
  }
  .location {

  }
`;

const OpeningTimes = ({ t }) => {  
  return (
    <OpeningTimesStyled>
      <Grid>
        <Row>
          <Col className="opening-times" xs={12} sm={5}>
            <div className="bg-overlay">
              <h2>OPENING <br/>TIMES</h2>
              <div>
                <p>Mon – Friday: 09:00 – 21:00 <br/>
                Saturday and Sunday: 09:00 – 22:00 </p>

                <p>Saigon Climbing Center <br/>
                168/42 Nguyen Gia Tri Street, Ward 25, Binh Thanh District, Ho Chi Minh City 70000</p>

                <p>Email us: saigonclimbing@gmail.com</p>

                <p>Call us: 0888.222.045 – 0966.22.18.22</p>
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
