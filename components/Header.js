import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import { Grid, Row, Col } from "react-styled-flexboxgrid";

const HeaderStyled = styled.header`
  background-color: #fff;
  position: fixed;
  height: 6rem;
  width: 100%;
  z-index: 100;
  .site-header {
    display: flex;
    justify-content: space-between;
  }
  .site-logo {
    display: block;
    height: 5rem;
    margin-right: auto;
    img {
      object-fit: contain;
      height: 100%;
      object-fit: contain;
      width: auto;
    }
  }
  .menu-area {
    margin-left: auto;
  }
  .main-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background-color: #fff;
    position: absolute;
    top: 5rem;
    left: 0;
    list-style: none;
    overflow: hidden;
    width: auto;
    transition: all 0.3s ease-out;
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
    padding: 0 2.4rem;
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
        padding: 2rem 0 1rem;
        text-decoration: none;
        transition: all 0.45s;
        text-align: left;
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
    padding: 2.8rem 2rem;
    position: relative;
    user-select: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    .navicon {
      background: #333;
      display: block;
      height: 0.2rem;
      position: relative;
      transition: background 0.2s ease-out;
      width: 1.8rem;
    }

    .navicon:before,
    .navicon:after {
      background: #333;
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
      max-height: 24rem;
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
        background-image: url('/images/vn.png');
      }
      &:last-child {
        background-image: url('/images/en.png');
      }
      &.active {
        display: none;
      }
    }
  }


  @media (min-width: 768px) {
    height: 8rem;
    .site-logo {
      height: 8rem;
    }
    .main-menu {
      flex-direction: row;
      clear: none;
      max-height: none;
      height: 8rem;
      position: relative;
      top: 0;
      padding: 0;
      
      li {
        width: auto;
        a {
          font-size: 2rem;
          text-align: center;
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
    // { path: "/news", text: "newsMenu" },
    { path: "/contact", text: "contactMenu" },
  ];

  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <HeaderStyled>
      <Grid>
        <Row>
          <Col className="site-header" xs={12}>
            <Link href="/">
              <a className="site-logo">
                <img
                  src="/images/logo_scc_white_bg.png"
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
                    className={locale == 'vi' ? 'active': ''}
                  />
                  <button
                    onClick={changeLanguage}
                    defaultValue={locale}
                    value="en"
                    className={locale == 'en' ? 'active': ''}
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