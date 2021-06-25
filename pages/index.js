import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { IntroVideoSection } from "@/components/IntroVideoSection";
import HeroBanner from "@/components/HeroBanner";
import ClimbingSection from "@/components/ClimbingSection";
import BlockImage from "@/components/BlockImage";
import OpeningTimes from "@/components/OpeningTimes";
import FacilitiesSection from "@/components/FacilitiesSection";
import CTASection from "@/components/CTASection";


const Homepage = () => {
  const { t } = useTranslation("home");

  return (
    <main>
      <HeroBanner
        title1={t("heroBannerText01")}
        title2={t("heroBannerText02")}
        title3={t("heroBannerText03")}
        imgSrc="/images/hero-banner.jpg"
        linkText={t("heroBanneButton01")}
        linkUrl="/about-us"
      />
      <CTASection />
      <BlockImage
        title="RISE TO THE CHALLENGE"
        description="It’s a good idea to move the location of your hand-holds periodically to keep the climbing wall interesting and challenging for climbers over time."
        imgSrc="/images/route-setting.jpg"
        linkText="Join the team"
        linkUrl="#"
      />
      <ClimbingSection/>
      <Grid>
        <Row>
          <Col xs={12}>
            <IntroVideoSection
              source={"/images/climbing-video.mp4"}
              bgImage={"/images/poster.jpg"}
            />
          </Col>
        </Row>
      </Grid>
      <FacilitiesSection />
      <OpeningTimes />

    </main>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home","common"])),
  },
});

export default Homepage;
