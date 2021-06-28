import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import GoToTop from "./GoTopTop";

const FooterStyled = styled.footer`
  background: #1e2428;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-width: 100vw;
  /* clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%); */
  padding-top: 5rem;
  display: table;
  &:before {
    background: #ed4815;
    position: absolute;
    content: "";
    top: -5rem;
    left: 0;
    width: 100%;
    height: 5rem;
    clip-path: polygon(0 0, 100% 100%, 100% 100%, 0 100%);
  }
  .site-logo {
    width: 30rem;
    margin: auto;
  }
  .footer-bottom {
    border-top: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem 0 1rem;
  }
  .footer-menu {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;
    li {
      display: inline;
      margin-right: 1.5rem;
    }
    a {
      font-size: 1.4rem;
      color: rgb(255 255 255 / 40%);
      text-decoration: none;
      text-transform: uppercase;
      transition: color 0.1s linear;
      &:hover {
        color: #ed4815;
      }
    }
  }

  .social-network {
    color: rgb(255 255 255 / 40%);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.2rem;
    div {
      display: inline-flex;
    }
    .tel {
      a {
        margin-right: 2rem;
        height: 4rem;
        line-height: 4rem;
      }
      span {
        color: #ed4815;
        font-weight: bold;
      }
    }
  }
  .icon {
    display: block;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2rem;
    border-radius: 50%;
    background-color: #ddd;
    &:hover {
      background-size: 2.2rem;
    }
    &.icon-facebook {
      background-image: url("/images/icon-facebook.svg");
    }

    &.icon-instagram {
      background-image: url("/images/icon-instagram.svg");
    }

    &.icon-youtube {
      background-image: url("/images/icon-youtube.svg");
    }
  }
  .copyright {
    color: rgb(255 255 255 / 40%);
    padding-bottom: 2rem;
  }
  @media (min-width: 768px) {
    .footer-menu {
      flex-direction: row;
    }
    .social-network {
      justify-content: flex-end;
      flex-direction: row;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const buttons = [
    { path: "/first-visit", text: "firstVisitMenu" },
    { path: "/pricing", text: "pricingMenu" },
    { path: "/events", text: "eventsMenu" },
    { path: "/groups-parties", text: "groupsPartiesMenu" },
    { path: "/contact", text: "contactMenu" },
  ];
  return (
    <FooterStyled>
      <Grid>
        <Row>
          <Col xs={12}>
            <GoToTop time={"100"} />
          </Col>
          <Col xs={12}>
            <ul className="footer-menu">
              {buttons.map((button) => (
                <Link key={button.text} href={button.path}>
                  <li>
                    <a className={router === button.path ? "active" : ""}>
                      {t(button.text)}
                    </a>
                  </li>
                </Link>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col xs={12} sm={6} className="copyright">
            {t("description")}
          </Col>
          <Col xs={12} sm={6} className="social-network">
            <div className="tel">
              <a>
                <span>HCM:</span> 0888.222.045
              </a>
              <a>
                <span>HN:</span> 0888.222.045
              </a>
            </div>
            <div>
              <a className="icon icon-facebook" href="#0"></a>
              <a className="icon icon-youtube" href="#0"></a>
              <a className="icon icon-instagram" href="#0"></a>
            </div>
          </Col>
        </Row>
      </Grid>
    </FooterStyled>
  );
};

export default Footer;
