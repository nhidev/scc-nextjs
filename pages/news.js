import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import HeroBanner from "../components/HeroBanner";
import PostCard from "../components/PostCard";

import axios from "axios";

const NewsStyled = styled.main`
  section {
    position: relative;
    margin-top: -10rem;
    padding-top: 10rem;
    z-index: 1;
    /* &:before {
      background-color: rgb(238 238 238);
      clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 85%);
      content: '';
      display: block;
      height: 100rem;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    } */
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
  .post-content--alt {
    margin-top: 10vw;
  }
  .post-content__img,
  .post-content__img img {
    /* clip-path: polygon(0% 100%, 100% 94%, 100% 0, 37% 0, 0 13%); */
    width: 100%;
  }
  .post-content .text-wrapper {
    width: 80%;
    margin: 0;
  }

  .post-content__meta {
    margin-bottom: 1.5rem;
    margin-top: 3rem;
  }
  .post-content__cta {
    margin-top: 1.5625rem;
  }
`;

const News = ({ data: data }) => {
  const router = useRouter();
  const toPostView = (id) => router.push(`/posts/${id}`);
  const { t } = useTranslation("common");
  
  console.log('data', data);
  return (
    <>
    <NewsStyled>
      <HeroBanner
        title1={t("ALL THE LATEST NEWS FROM")}
        title2={t("SAIGON CLIMBING CENTER")}
        imgSrc="/images/blog.jpg"
      />
      <section>
      <Grid className="mr10">
        <Row className="row">
        
        {data.map((post) => (
            <PostCard
              key={post.id}
              title={post.Title}
              publishedAt={post.published_at}
              onClick={() => toPostView(post.id)}
            />
          ))}

          {/* <Col className="col" xs={12} sm={6}>
            <div className="post-content post-content--alt">
              <div className="post-content__img">
                <a href="https://parthianclimbing.com/reading/2020/05/08/conquering-your-fear-of-falling/">
                  <img src="https://parthianclimbing.com/reading/wp-content/uploads/sites/15/2020/04/37857561235_0a10642190_k.jpg" />
                </a>
              </div>
              <div className="text-wrapper">
                <div className="post-content__meta">
                  <p className="">June 8, 2020</p>
                </div>
                <div className="post-content__content">
                  <h4>Conquering your Fear of Falling </h4>
                </div>

                <div className="post-content__cta">
                  <a
                    className="btn btn--black-keyline btn--large"
                    href="https://parthianclimbing.com/reading/2020/05/08/conquering-your-fear-of-falling/"
                  >
                    <span>Find out more</span>
                    <i></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} sm={6}>
            <div className="post-content">
              <div className="post-content__img">
                <a href="https://parthianclimbing.com/reading/2020/09/29/oct-half-term-sessions/">
                  <img src="https://parthianclimbing.com/reading/wp-content/uploads/sites/15/2019/10/Photo-28-09-2019-14-17-03-2.jpg" />
                </a>
              </div>

              <div className="text-wrapper">
                <div className="post-content__meta">
                  <p className="">May 29, 2020</p>
                </div>
                <div className="post-content__content">
                  <h4>OCT HALF TERM SESSIONS </h4>
                </div>

                <div className="post-content__cta">
                  <a
                    className="btn btn--black-keyline btn--large"
                    href="https://parthianclimbing.com/reading/2020/09/29/oct-half-term-sessions/"
                  >
                    <span>Find out more</span>
                    <i></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} sm={6}>
            <div className="post-content post-content--alt">
              <div className="post-content__img">
                <a href="https://parthianclimbing.com/reading/2020/04/10/new-comer-to-setting/">
                  <img src="https://parthianclimbing.com/reading/wp-content/uploads/sites/15/2020/04/AFP5972.jpg" />
                </a>
              </div>

              <div className="text-wrapper">
                <div className="post-content__meta">
                  <p className="">April 10, 2020</p>
                </div>
                <div className="post-content__content">
                  <h4>NEW COMER TO SETTING </h4>
                </div>

                <div className="post-content__cta">
                  <a
                    className="btn btn--black-keyline btn--large"
                    href="https://parthianclimbing.com/reading/2020/04/10/new-comer-to-setting/"
                  >
                    <span>Find out more</span>
                    <i></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col" xs={12} sm={6}>
            <div className="post-content">
              <div className="post-content__img">
                <a href="https://parthianclimbing.com/harrogate/2020/05/29/the-power-of-knowledge-know-your-holds/">
                  <img src="https://parthianclimbing.com/harrogate/wp-content/uploads/sites/19/2020/05/39149561090_30a6c76485_o-e1590747648862.jpg" />
                </a>
              </div>

              <div className="text-wrapper">
                <div className="post-content__meta">
                  <p className="">March 29, 2020</p>
                </div>
                <div className="post-content__content">
                  <h4>The Power of Knowledge – Know Your Holds </h4>
                </div>

                <div className="post-content__cta">
                  <a
                    className="btn btn--black-keyline btn--large"
                    href="https://parthianclimbing.com/harrogate/2020/05/29/the-power-of-knowledge-know-your-holds/"
                  >
                    <span>Find out more</span>
                    <i></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        */}
        </Row>
      </Grid>
      </section>
    </NewsStyled>
    </>
  );
};

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });


export const getStaticProps = async ({ locale }) => {
  const response = await axios.get(`http://localhost:1337/posts?_locale=${locale}`, {
    headers: {
      Accept: "application/json",
    },
  });

  const data = response.data;
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default News;
