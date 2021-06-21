import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import HeroBanner from "@/components/HeroBanner";

const EventsStyled = styled.main`
  .main-head {
    h1 {
      margin-bottom: 2rem;
    }
  }
  .main-head__detail {
    display: flex;
    margin-left: 5rem;
    ul {
      list-style: disc;
    }
  }
  .main-content {
    position: relative;
    padding: 10rem 0;
    z-index: 1;
  }
  img {
    border: 0;
    display: block;
    height: auto;
    max-width: 100%;
  }
  .post-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: wrap;
    align-content: stretch;
    margin: 2rem;
  }
  .post-content__img {
    margin-bottom: 2rem;
    overflow: hidden;
    img {
      height: 30rem;
      width: 100%;
      object-fit: cover;
    }
  }
  .cta-columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Events = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <EventsStyled>
      <HeroBanner
        title1={t("ALL THE LATEST NEWS FROM")}
        title2={t("SAIGON CLIMBING CENTER")}
        imgSrc="/images/course.jpg"
      />

      <section className="main-head">
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <h1>SCC EVENTS</h1>
              <p>
                Special events are our jam! Large or small, a one-off climb with
                friends or colleagues at Sai Gon Climbing Centers is an
                experience you’ll never forget.{" "}
              </p>
              <p>
                Whatever type of event you’re looking at holding or attending,
                we’ve got you covered. Here are just a few that we’ve run:{" "}
              </p>
            </Col>
            <Col className="main-head__detail" xs={12}>
              <ul>
                <li>Fundraisers</li>
                <li>Movie nights</li>
                <li>Climbing competitions</li>
                <li>Demo nights showcasing the best climbing brands</li>
                <li>
                  Our famous Pitch Black event (climbing in the dark with
                  headlamps to pumping DJ beats –&nbsp;an experience you won’t
                  want to miss!)
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </section>
      <section className="main-content">
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <div className="post-content">
                <div className="post-content__img">
                  <a href="#">
                    <img src="/images/blacklight-party.jpg" />
                  </a>
                </div>

                <div className="text-wrapper">
                  <div className="post-content__content">
                    <h4>BLACK LIGHT EVENT</h4>
                    <p>Competitions not your thing but still want to experience the fun of climbing in the black lights?<br/>
                    Invite your friends, wear your best GLOW, and join us for an after-hours, kid-friendly, member event. As a way to say thank you to our members, we’ll turn out the lights one more time before the work begins Monday morning to return things to “normal” around here.<br/>
                    Participants must sign up ahead of time as space is limited and must wear a headlamp at all times during the Blacklight Party. There is NO lead climbing.<br/>
                    FREE for members! Regular day pass rates apply for guests of members.
                    </p>
                  </div>

                  <div className="cta-columns">
                    <div className="cta-block">
                      <div className="cta-text">
                        <h4>HA NOI</h4>
                        <p>
                          19/10/2021
                          <br />
                          Time: to 7pm - 10pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={6}>
              <div className="post-content">
                <div className="post-content__img">
                  <a href="#">
                    <img src="/images/tuesday-climb.jpg" />
                  </a>
                </div>

                <div className="text-wrapper">
                  <div className="post-content__content">
                    <h4>TEUSDAY SOCIAL CLIMB</h4>
                    <p>
                      What better way to end the week than a climb with old
                      friends and maybe a few new ones? Come along to our Friday
                      night social climbs at Kirrawee and St Leonards, which go
                      from 7pm to late (meet at reception). All levels welcome –
                      see you there!
                    </p>
                  </div>

                  <div className="cta-columns">
                    <div className="cta-block">
                      <div className="cta-text">
                        <h4>HO CHI MINH</h4>
                        <p>
                          Every Tuesday
                          <br />
                          Time: 9am - 10pm
                        </p>
                      </div>
                    </div>
                    <div className="cta-block">
                      <div className="cta-text">
                        <h4>HA NOI</h4>
                        <p>
                          Every Tuesday
                          <br />
                          Time: to 9am - 10pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="post-content">
                <div className="post-content__img">
                  <a href="#">
                    <img src="/images/ladies-night.jpg" />
                  </a>
                </div>

                <div className="text-wrapper">
                  <div className="post-content__content">
                    <h4>LADIES NIGHT CLIMB</h4>
                    <p>
                      Meet other girls who are psyched on climbing too and get
                      your social (and sweat) fix at our fun, ladies-only climb.
                      No bookings necessary – just rock up at reception. All
                      levels welcome. Interested? Learn more about women in
                      climbing{" "}
                    </p>
                  </div>

                  <div className="cta-columns">
                    <div className="cta-block">
                      <div className="cta-text">
                        <h4>HO CHI MINH</h4>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                    <div className="cta-block">
                      <div className="cta-text">
                        <h4>HA NOI</h4>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="post-content">
                <div className="post-content__img">
                  <a href="#">
                    <img src="/images/rise-climb.jpg" />
                  </a>
                </div>

                <div className="text-wrapper">
                  <div className="post-content__content">
                    <h4>RISE & CLIMB</h4>
                    <p>
                      Meet other girls who are psyched on climbing too and get
                      your social (and sweat) fix at our fun, ladies-only climb.
                      No bookings necessary – just rock up at reception. All
                      levels welcome. Interested? Learn more about women in
                      climbing{" "}
                    </p>
                  </div>

                  <div className="cta-columns">
                    <div className="cta-block">
                      <div className="cta-text">
                        <h4>HO CHI MINH</h4>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                    <div className="cta-block">
                      <div className="cta-text">
                        <h4>HA NOI</h4>
                        <p>Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    </EventsStyled>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Events;
