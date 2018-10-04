import React from "react";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import {
  Footer as FooterBase,
  Row,
  Col
} from "mdbreact";

// Images
import FooterLogo from '../assets/img/header/logo.png';
import DtubeLogo from '../assets/img/footer/dtube.png';
import SteemItLogo from '../assets/img/footer/steemit.png';

/**
 * The footer of all pages.
 */
function Footer() {
  return (
    <span id="apppage">
    <FooterBase className="footer text-center">
      <div className="containerfix">
        <Row className="vertical-align footerrow">

      <div className="col-md-10 mx-md-auto">

          <Col className="logoFooter" md="4">
<<<<<<< HEAD
            <Link to="/">
              <img alt="" style={{ width: 173, height: 'auto' }} src={FooterLogo} />
            </Link>
=======
            <img alt="" src={FooterLogo} />
>>>>>>> 8fc4294cf6ad01f2a1053798e64d17cfb6fdc2ae
          </Col>

          <Col md="4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/Agorise">
                  <i className="fa fa-telegram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/Agorise_world">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtube.com/Agorise">
                  <i className="fa fa-youtube" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://d.tube/c/agorise">
                  <img alt="" src={DtubeLogo} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://steemit.com/@Agorise">
                  <img alt="" src={SteemItLogo} />
                </a>
              </li>
            </ul>
          </Col>
          <Col className="brandTextFooter" md="4">
            <p className="mb-0">
              <span id="ft_lang1">
                <FormattedMessage id="footer.title" />
              </span>
            </p>
          </Col>
          </div>
        </Row>

        <div
          className="copyright py-3 text-center text-white"
          style={{ fontSize: "0.8em" }}>
<div className="col-md-10 mx-md-auto">
            <div className="row vertical-align">
              <div className="col-md-10 mx-md-auto">
                <p>
                  <span id="cp_lang1">
                    <FormattedHTMLMessage id="footer.description" />
                  </span>
                </p>
              </div>
            </div>
            <div className="row vertical-align">
              <div className="col-md-4" />
              <div className="col-md-4">
                <small>
                  &copy; Copyright {new Date().getFullYear()}{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://agorise.world/">
                    {" "}
                    Agorise Ltd.{" "}
                  </a>
                </small>
              </div>
            </div>

            <div className="row developersName justify-content-end">
              <div
                style={{ fontSize: "0.8em" }}
                className="text-white col-md-2">
                <small>
                  Site by:
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://about.me/poqdavid">
                    poqdavid
                  </a>
                  {" "} & {" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://leticiacamara.com">
                    Leticia Camara
                  </a>
                </small>
              </div>
            </div>

          </div>
        </div>
      </div>
    </FooterBase>
    </span>
  );
}

export default Footer;
