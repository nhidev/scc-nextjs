import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { Grid, Row, Col } from "react-styled-flexboxgrid";

const HeaderStyled = styled.header`
  background-color: #fff;
  position: fixed;
  padding: 0;
  transition: padding 0.3s;
  width: 100%;
  z-index: 100;
  &:after {
    bottom: 0;
    box-shadow: 0 0 40px 0 rgb(30 36 40 / 10%);
    content: "";
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.3s;
    z-index: -1;
  }
  &.scrolled {
    padding: 0;
    &:after {
      opacity: 1;
    }
  }

  .site-header {
    display: flex;
  }
  .site-logo {
    display: block;
    height: 5rem;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    img {
      object-fit: contain;
      height: 100%;
      object-fit: contain;
      width: auto;
    }
  }
  .menu-area {
    margin-left: auto;
    display: flex;
  }
  .main-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    position: absolute;
    top: 6.5rem;
    right: 0;
    list-style: none;
    overflow: hidden;
    width: 0;
    z-index: 1000;
    ul {
      margin-right: 2rem;
    }
    li {
      float: left;
      min-width: 9rem;
      transition: background-position-x 0.9s linear;
      width: 100%;
      display: block;
      cursor: pointer;
      a {
        display: block;
        padding: 1rem 0;
        text-decoration: none;
        transition: all 0.45s;
        font-size: 2.4rem;
        text-align: center;
      }

      &:hover a {
        color: rgb(237 72 21);
      }

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
    @keyframes line {
      0% {
        background-position-x: 39rem;
      }
    }
  }

  /* menu icon */
  .menu-icon {
    cursor: pointer;
    display: inline-block;
    padding: 3rem 2rem;
    position: relative;
    user-select: none;
    right: 1rem;
    top: 0;
    bottom: 0;
    background: url("/images/burger-bg.svg") no-repeat center;
    background-size: contain;
    z-index: 10000;
    .navicon {
      background: #fff;
      display: block;
      height: 0.2rem;
      position: relative;
      transition: background 0.2s ease-out;
      width: 1.8rem;
    }

    .navicon:before,
    .navicon:after {
      background: #fff;
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
      width: 100%;
    }

    .navicon:before {
      top: 0.5rem;
    }

    .navicon:after {
      top: -0.5rem;
    }
  }

  /* menu btn */
  .menu-btn {
    display: none;
    &:checked ~ .main-menu {
      background-color: rgb(237 237 237 / 95%);
      transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transform: translateX(0);
      height: calc(100vh - 6rem);
      width: 100%;
      ul {
        padding: 2.4rem;
      }
      .language-wrap {
        justify-content: center;
      }
    }
    &:checked ~ .menu-icon .navicon {
      background: transparent;
    }

    &:checked ~ .menu-icon .navicon:before {
      transform: rotate(-45deg);
    }

    &:checked ~ .menu-icon .navicon:after {
      transform: rotate(45deg);
    }

    &:checked ~ .menu-icon:not(.steps) .navicon:before,
    &:checked ~ .menu-icon:not(.steps) .navicon:after {
      top: 0;
    }
  }

  .language-wrap {
    display: flex;
    width: 100%;
    button {
      background: transparent;
      background-size: 3rem;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 50%;
      border: none;
      outline: none;
      cursor: pointer;
      width: 3rem;
      height: 3rem;
      &:first-child {
        background-image: url("/images/vn.png");
      }
      &:last-child {
        background-image: url("/images/en.png");
      }
      &.active {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 1rem 0;
    .site-logo {
      height: 7rem;
    }
    .main-menu {
      flex-direction: row;
      position: relative;
      top: 0;
      width: auto;
      li {
        width: auto;
        a {
          font-size: 2rem;
        }
        &:hover {
          background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEi%0D%0AIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0%0D%0AaD0iMzkwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDM5MCA1MCIgZW5hYmxlLWJhY2tn%0D%0Acm91bmQ9Im5ldyAwIDAgMzkwIDUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZmlsbD0i%0D%0Abm9uZSIgc3Ryb2tlPSIjZDk0ZjVjIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGlt%0D%0AaXQ9IjEwIiBkPSJNMCw0Ny41ODVjMCwwLDk3LjUsMCwxMzAsMAoJYzEzLjc1LDAsMjguNzQtMzgu%0D%0ANzc4LDQ2LjE2OC0xOS40MTZDMTkyLjY2OSw0Ni41LDI0My42MDMsNDcuNTg1LDI2MCw0Ny41ODVj%0D%0AMzEuODIxLDAsMTMwLDAsMTMwLDAiLz4KPC9zdmc+Cg==");
          animation: line 1s;
        }
      }
    }
    .menu-icon {
      display: none;
    }
    .language-wrap {
      width: auto;
    }
  }
`;

const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const buttons = [
    { path: "/about", text: "aboutMenu" },
    { path: "/pricing", text: "pricingMenu" },
    { path: "/events", text: "eventsMenu" },
    { path: "/contact", text: "contactMenu" },
  ];

  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }

  return (
    <HeaderStyled className={x.join(" ")}>
      <Grid>
        <Row>
          <Col className="site-header" xs={12}>
            <Link href="/">
              <a className="site-logo">
                <Image
                  src="/images/logo_scc_white_bg.png"
                  width="280"
                  height="70"
                  alt="saigon climbibg center"
                />
              </a>
            </Link>
            <div className="menu-area">
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
              </label>
              <nav className="main-menu">
                <ul>
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
                <div className="language-wrap">
                  <button
                    onClick={changeLanguage}
                    defaultValue={locale}
                    value="vi"
                    className={locale == "vi" ? "active" : ""}
                  />
                  <button
                    onClick={changeLanguage}
                    defaultValue={locale}
                    value="en"
                    className={locale == "en" ? "active" : ""}
                  />
                </div>
              </nav>
            </div>
          </Col>
        </Row>
      </Grid>
    </HeaderStyled>
  );
};

export default Header;
