import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import HeroBanner from "@/components/HeroBanner";

const GroupsPartiesStyled = styled.main`
  h3 {
    margin-bottom: 2rem;
  }
  h4 {
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    object-fit: contain;
    margin: 2rem auto;
    max-height: 50vh;
    text-align: center;
  }
  .scc-content {
    padding: 10rem 0;
  }
`

const GroupsParties = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <GroupsPartiesStyled>
      <HeroBanner
        title1={t("CLIMB MORE")}
        title2={t("SAVE MORE")}
        imgSrc="/images/pricing.jpg"
      />
      <Grid className="scc-content">
        <Row className="row">
          <Col className="col" xs={12}>
            <br />
            <h3>NEW TO CLIMBING?</h3>
            <br />
            <p>
              Don’t worry about a thing. All you have to do is show up, and
              we’ll take care of you. You’ll do great, we promise!
              <br />
              While we do lots of cool stuff at VITAL (yoga, fitness, clinics,
              etc), we are at heart a climbing gym. You don’t need to have any
              experience to get started and we have climbs for all skill levels.
              <br />
              All of our locations are bouldering only. Bouldering is one of the
              main disciplines of climbing. You don’t need a rope, harness, or
              belayer—the walls aren’t very tall and are built over a padded
              floor. Free from the need of specialized knowledge or equipment,
              bouldering is a beautifully simple, social, and fun way to climb.
            </p>
            <h4>CLIMB FOR A DAY…</h4>
            <p>
              You don’t need to be a member and can buy a day pass which is
              valid for the whole day. Most of our customers are members, but
              lots of people come just for the day.
            </p>
            <h4>…OR BECOME A MEMBER</h4>
            <p>
              Members have 24/7 access to the gyms. We’re open to the public
              during the day, but only members are granted unlimited overnight
              access.
            </p>
            <img src="/images/first-visit.jpg" />
            <h3>WHAT TO WEAR</h3>
            <p>
              Wear comfortable clothes you can move around in. Climbing shoes
              are required while on the walls in our Brooklyn and California
              locations. If you don't have your own, we have shoes available to
              rent, and we suggest wearing them with socks. We do allow climbing
              in street shoes in our Bellingham gym, but we recommend renting a
              pair of climbing shoes—you'll be surprised how small of a foothold
              you can use with them!
            </p>
            <h3>WE KEEP IT SIMPLE</h3>
            <p>
              We keep our policies and pricing as simple and straightforward as
              possible—we don’t charge cancellation fees, initiation fees, or
              lock people into contracts. Our goal is to create a positive and
              supportive culture, and we’re sure that you’ll feel welcome here
              no matter your skill level.
            </p>
          </Col>
        </Row>
      </Grid>
    </GroupsPartiesStyled>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default GroupsParties;
