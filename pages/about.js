import styled from "styled-components";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import HeroBanner from "@/components/HeroBanner";
import BlockImage from "@/components/BlockImage";
import OpeningTimes from "@/components/OpeningTimes";

const AboutStyled = styled.main`
  img {
    width: 100%;
    min-height: 50rem;
    object-fit: cover;
  }
  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10rem;
    h2 {
      margin-bottom: 4rem;
    }
  }
  .content-center {
    display: block;
    text-align: center;
    margin: auto;
  }
`;

const About = () => {
  const { t } = useTranslation("common");

  return (
    <AboutStyled>
      <HeroBanner
        title1={t("WE AIM TO INSPIRE")}
        title2={t("THE NEXT GENERATION OF")}
        title3={t("CLIMBERS")}
        imgSrc="/images/about-us.jpg"
      />
      <Grid>
        <Row className="row">
          <Col className="col" xs={12}>
            <br />
            <h1>“Our mission, through the sport of climbing, is to help you elevate your life, rise above your crux and inspire the world to ascend”</h1>
          </Col>
        </Row>
        <Row className="mb5">
          <Col xs={12}>
            <BlockImage
              title="Our Story…"
              description="Gecko Climbing Gym has been a dream for several years, starting with the desire to combine the two passions of owner Chris Tansey. After 15 years in youth ministry, Chris had the desire to merge worlds with his love of climbing. Alongside his wife Catherine, Chris has climbed all over the world and developed a taste and understanding of the rock climbing community.  This has translated into the heart of Gecko, with an emphasis on community engagement and involvement."
              imgSrc="/images/our-story.jpg"
              ltr={true}
            />
          </Col>
        </Row>
        <Row className="mb5">
          <Col xs={12} sm={6}>
            <Image src="/images/team.jpg" width="690" height="500"  alt="team"/>
          </Col>
          <Col xs={12} sm={6} className="text-box">
            <h2>Meet Our Team...</h2>
            <p>Chris and Catherine Tansey met in 2011 while climbing. They got married in 2013 and spent their honeymoon on the face of Half Dome in Yosemite National Park. Together they have two daughters, Callie and Clara who both enjoy climbing as much as their parents. Chris has climbed everywhere from the local crags to the walls of Yosemite. Chris has 15 years of experience in youth ministry which has a significant influence on his love for the community here at Gecko. His wife Catherine is a mental health professional, and her input has crafted a welcoming and inclusive environment here at the gym. Together, they have been dreaming of Gecko since 2019, and are dedicated to maintaining it as a North Phoenix climbing center.</p>

          </Col>
        </Row>
        <Row className="mb5">
          <h2 className="content-center">LET’S STAY CONNECTED!!!</h2>
        </Row>
      </Grid>
      {/* <OpeningTimes /> */}

    </AboutStyled>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default About;
