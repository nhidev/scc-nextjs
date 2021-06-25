import styled from "styled-components";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import HeroBanner from "@/components/HeroBanner";
import Map from '@/components/Map';

const ContactStyled = styled.main`
  .page-title {
    margin-bottom: 2rem;
    span {
      color: #fff;
      background-color: #222222;
    }
  }
  .map {
    clip-path: polygon(0 10rem, 100% 0, 100% calc(100% - 10rem), 0 100%);
  }

  .contact-info {
    padding: 10rem 0;
    clip-path: polygon(0 10rem, 100% 0, 100% calc(100% - 10rem), 0 100%);
    margin-bottom: -10rem;
    h4 {
      margin-bottom: 4rem;
    }
    .contact-summary p {
      padding: 0 0 6rem 6rem;
      background-position: 0 0;
      text-align: left;
      max-width: 35rem;
      background-size: contain;
      &.tel {
          background: url('/images/icon-phone.jpg') no-repeat top left;
        }
      &.time {
        background: url('/images/icon-hours.jpg') no-repeat top left;
        
      }
      &.email {
        background: url('/images/icon-email.jpg') no-repeat top left;
        
      }
      &.address {
        background: url('/images/icon-address.jpg') no-repeat top left;   
      }
    }
  }

  .contact-form {
    padding: 10rem 0;
    form {
      max-width: 60rem;
      .half {
        display: flex;
        gap: 2rem;
        input,
        textarea {
          font-size: 1.6rem;
          margin-bottom: 2rem; 
          border: 1px solid #eeeeee;
          border-radius: 0;
          padding: 1.5rem;
          display: block;
          width: 100%;
          resize: none;
          &:focus {
            outline-color: #ed4815;
            border-color: #ed4815;
          }
        }
        textarea {
          min-height: 10rem;
        }
      }
    }
    
    .btn-green {
      box-sizing: border-box;
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border: none;
      padding: 2rem 3rem;
      outline: none;
      background-color: #24bb9e;
      cursor: pointer;
      transition: background-color 0.3s;
      text-decoration: none;
      span {
        color: #fff;
        display: block;
        line-height: 1;
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        white-space: normal;
        text-transform: uppercase;
      }
      i {
        display: block;
        width: 1.875rem;
        height: 1px;
        background: #fff;
        margin-left: 6rem;
        position: relative;
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        &:before {
          content: "";
          width: 1.5rem;
          height: 1px;
          background: #fff;
          margin-left: -2rem;
          display: block;
          transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        &:after {
          content: "";
          display: block;
          position: absolute;
          top: -5px;
          left: 100%;
          width: 0;
          height: 0;
          border-top: 6px solid rgb(0 0 0 / 0%);
          border-bottom: 6px solid rgb(0 0 0 / 0%);
          border-left: 8px solid rgb(255 255 255);
          transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-left-color: rgb(255 255 255);
        }
      }
    }
    .btn-green:hover {
      /* background: #fff; */
      span {
        color: #1e2428;
        transform: translateX(1rem);
      }
      i {
        background: #1e2428;
        &:before {
          background: #1e2428;
        }
        &:after {
          border-left-color: #1e2428;
        }
      }
    }
  }

`;

const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <ContactStyled>
      <HeroBanner
        title1={t("Let’s Contact Us")}
        imgSrc="/images/contact.jpg"
      />

      <Grid className="contact-info">
        <Row>
          <Col xs={12} sm={12} md={4}>
            <h2 className="page-title">Let’s Find Our <span>Gyms</span></h2>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <h4>Ho Chi Minh</h4>
            <div className="contact-summary">
                <p className="tel">0888.222.045 – 0966.22.18.22</p>
                <p className="time">
                Mon – Friday: 09:00 – 21:00 <br/>
                Saturday - Sunday: 09:00 – 22:00<br/>
                Open regular hours during all holidays!</p>
                <p className="email">saigonclimbing@gmail.com</p>
                <p className="address">168/42 Nguyen Gia Tri Street, Ward 25, Binh Thanh District</p>
              </div>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <h4>Ha Noi</h4>
            <div className="contact-summary">
              <p className="tel">0888.222.045 – 0966.22.18.22</p>
              <p className="time">
                Mon – Friday: 09:00 – 21:00 <br/>
                Saturday - Sunday: 09:00 – 22:00<br/>
                Open regular hours during all holidays!</p>
              <p className="email">saigonclimbing@gmail.com</p>
              <p className="address">36 Tay Ho Street, Quang An Ward, Tay Ho District</p>
              </div>
          </Col>
        </Row>
      </Grid>
      <Map className="map" />
      {/* <Grid  className="contact-form">
      <Row>
          <Col xs={4} className="page-title">
          <h2>Drop Us A <span>Message</span></h2>
          </Col>
          <Col xs={8}>
            <form >
                <div className="half top">
                  <input type="text" id="input-name" placeholder="Name" />
                  <input type="email" id="input-email" placeholder="Email address" />
                </div>
                <div className="half bottom">
                  <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                </div>  
                <button className="btn-green" type="button" id="input-submit">
                  <span>Send email</span> <i />
                </button>
              </form>
          </Col>
        </Row>
      </Grid> */}
    </ContactStyled>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Contact;
