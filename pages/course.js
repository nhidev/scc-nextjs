import styled from "styled-components";
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import HeroBanner from "@/components/HeroBanner";

const CourseStyled = styled.main`

`;

const Class = () => {

  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <CourseStyled>
        <HeroBanner
        title1={t("ALL THE LATEST NEWS FROM")}
        title2={t("SAIGON CLIMBING CENTER")}
        imgSrc="/images/course.jpg"
      />
   
      <Grid>
        <Row className="row">
          <Col className="col" xs={12}>
            <br />
              <h1>We are offering programs</h1>
              <p><b>Intro to Bouldering</b></p>
              <br />
            <p>
            If you are just starting out and would like some more direction and climbing tips, take our 1.5 hour introductory course taught by our professional climbing staff. This course covers all the basic info you need to get the most out of your bouldering experience including: basic climbing technique, safety, and understanding the climbs and grading systems. The Intro Course is a great way to get started and we include a free week of bouldering at Saigon Climbing Center with the course.
            </p>
          </Col>
        </Row>
      </Grid>
    </CourseStyled>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Class
