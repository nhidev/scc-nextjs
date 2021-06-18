import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import HeroBanner from "../components/HeroBanner";
import BlockImage from "../components/BlockImage";

const Pricing = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const PricingStyled = styled.main`
    section {
      position: relative;
      margin-top: -10rem;
      padding: 10rem 0;
    }
    h1 {
      margin-bottom: 4rem;
    }
    h3 {
      margin-bottom: 1rem;
    }
    .responsive-table {
      margin-bottom: 5rem;
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th {
        text-align: left;
        padding: 2rem;
        font-weight: bold;
        border-color: #fff;
      }
      tbody tr:nth-child(odd) {
        background-color: rgb(244 244 244);
      }
      td {
        padding: 1rem;
        width: 50%;
      }
      .note {
        margin: 1rem auto;
        span {
          color: #ed4815;
          vertical-align: text-top;
        }
      }
    }
  `;

  return (
    <PricingStyled>
      <HeroBanner
        title1={t("CLIMB MORE")}
        title2={t("SAVE MORE")}
        imgSrc="/images/pricing.jpg"
      />
      <section>
        <Grid>
          <Row className="mb5">
            <Col xs={12}>
              <h1>PRICING</h1>
              <p>
                For independent, competent climbers and their guests, we
                offer three types of packages; 'Pay As You Go', Multi-passes
                and Memberships.
              </p>
              <p>
                You will need to wear climbing shoes but don't worry if you
                don't own a pair, we have some great shoes for sale in our
                shop from as little as 2.000.000 VNĐ or, you can hire them for just 20.000 VNĐ
                per visit.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col xs={8}>
                  <h3>DAY PASSES</h3>
                  <div className="responsive-table">
                    <table>
                      <tbody>
                        <tr>
                          <td>TOPROPE/LEAD (1 HOUR)</td>
                          <td>170.000 VNĐ</td>
                        </tr>
                        <tr>
                          <td>BOULDERING (ALL DAY) </td>
                          <td>170.000 VNĐ</td>
                        </tr>
                        <tr>
                          <td>BOULDERING & TOPROPE/LEAD (ALL DAY)</td>
                          <td>250.000 VNĐ</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="note">
                      <span>*</span> Includes gear rentals and instructor
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
         
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col xs={8}>
                  <h3>PUNCH PASS</h3>
                  <p>Punch-Passes are great if you are coming occasionally, and want to save some money on Day-passes. Punch-Passes do not expire and can be shared, but certain restrictions do apply, talk to our Front Desk staff for details.</p>
                  <div className="responsive-table">
                    <table>
                      <tbody>
                        <tr>
                          <td>10 HITS (ENTRIES) PASS</td>
                          <td>1.700.000 VNĐ</td>
                        </tr>
                        <tr>
                          <td>20 HITS (ENTRIES) PASS</td>
                          <td>3.200.000 VNĐ</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="note">
                      <span>*</span> Includes rental equipment hire and instructor<br />
                      <span>*</span> Pass may be used for multiple people
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col xs={8}>
                  <h3>PRE-PAID</h3>
                  <p>This is great for short-term visitors, or if you just want to try out membership, but you're not ready to commit.</p>
                  <div className="responsive-table">
                    <table>
                      <tbody>
                        <tr>
                          <td>MONTHLY MEMBERSHIP</td>
                          <td>2.100.000 VNĐ</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="note">
                      <span>*</span> Includes gear rentals and instructor
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Row center="xs">
                <Col xs={8}>
                  <h3>ANNUAL MEMBERSHIP</h3>
                  <p>This is our best membership style, if you are coming consistently for two months or more. Membership inludes benefits, such as discounts in our shop, one guest-pass per member, and awesome climbing. Memberships can be frozen or terminated any time from this website.</p>
                  <div className="responsive-table">
                    <table>
                      <tbody>
                        <tr>
                          <td>YEARLY MEMBERSHIP</td>
                          <td>12.800.000 VNĐ</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="note">
                      <span>*</span> Includes gear rentals and instructor
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mb5">
            <Col xs={12}>
              <Row center="xs">
                <Col xs={8}>
                  <h3>EQUIPMENT HIRE</h3>
                  <p>We have the equipment you need available for rental. We do require climbing shoes for climbing on our walls.</p>
                  <div className="responsive-table">
                    <table>
                      <thead>
                        <tr>
                          <th>EQUIPMENT</th>
                          <th>PRICE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>CLIMBING SHOES</td>
                          <td>20.000 VNĐ</td>
                        </tr>
                        <tr>
                          <td>HARNESS</td>
                          <td>20.000 VNĐ</td>
                        </tr>
                        <tr>
                          <td>CHALK BAG</td>
                          <td>20.000 VNĐ</td>
                        </tr>
                        <tr>
                          <td>BELAY DEVICE</td>
                          <td>60.000 VNĐ</td>
                        </tr>
                        <tr>
                          <td>ROPE</td>
                          <td>90.000 VNĐ</td>
                        </tr>
                        <tr>
                          <td>FULL HIRE PACKAGE £6</td>
                          <td>100.000 VNĐ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
         
          <Row>
            <Col xs={12}>
              <BlockImage
                title="why become a member?"
                description="your memberships includes unlimited access to climbing and course sessions, free gear rentals, 1 guest pass per month, access to special events, and more! "
                description2="If you are an avid climber looking to get plugged into our community, sign up for a membership today!"
                imgSrc="/images/membership.jpg"
                ltr={true}
              />
            </Col>
            <Col xs={12}>
              <p className="btn-orange">CALL NOW: 0888.222.045</p>
            </Col>
          </Row>
        </Grid>
      </section>
    </PricingStyled>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Pricing;
