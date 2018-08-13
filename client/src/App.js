import React from "react";
import { Footer, Row, Col, Modal, ModalBody, ModalHeader } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import HomeNav from "./components/HomeNav";
import MarketingNav from "./components/MarketingNav";
import "./index.css";
import "./static/css/palmpay.css";

//import './static/css/palmpay.css';

import Routes from "./Routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showmenu: true };
    this.state = {
      collapse: false,
      modal2: false
    };
    this.toggle2 = this.toggle2.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleNavbarClick() {
    this.setState({
      collapse: false
    });
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }

  render() {
    const currentPath = window.location.pathname;
    const collapsed = this.state.collapsed;
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleNavbarClick}
      />
    );
    return (
      <Router>
        <span id="apppage">
          {!currentPath.includes("marketing") ? (
            <HomeNav toggle2={this.toggle2} />
          ) : (
            <MarketingNav />
          )}
          {collapsed && overlay}

          <Routes />

          <Footer className="footer text-center">
            <div className="containerfix">
              <Row className="vertical-align footerrow">
                <Col md="4">
                  <img alt="" src="./img/footerlogo.png" />
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
                        <img alt="" src="./img/dtube.png" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://steemit.com/@Agorise">
                        <img alt="" src="./img/steemit.png" />
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col md="4">
                  <p className="mb-0">
                    <span id="ft_lang1">FASTER AND SAFER THAN CASH</span>
                  </p>
                </Col>
              </Row>

              <div
                className="copyright py-3 text-center text-white"
                style={{ fontSize: "0.8em" }}>
                <div>
                  <div className="row vertical-align">
                    <div className="col-md-10 mx-md-auto">
                      <p>
                        <span id="cp_lang1">
                          This website is not intended as legal or financial
                          advice, is not a guarantee of anything and we do not
                          collect any info about you whatsoever. PalmPay is a
                          Point Of Sale product by Agorise, Ltd. For technical
                          details, chat anytime 24/7 with the Agorise community
                          on Telegram at:
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://t.me/Agorise">
                            {" "}
                            http://t.me/Agorise
                          </a>
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

                  <div className="row justify-content-end">
                    <div
                      style={{ fontSize: "0.8em" }}
                      className="text-white col-md-2">
                      <small>
                        Site by:{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://about.me/poqdavid">
                          poqdavid
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Footer>

          <Modal isOpen={this.state.modal2} toggle={this.toggle2}>
            <ModalHeader toggle={this.toggle2}>
              <span id="mdl_lang1">Downloads</span>
            </ModalHeader>
            <ModalBody className="text-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=cy.agorise.palmpay">
                <img
                  alt=""
                  className="logo1"
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                  height="60"
                  width="auto"
                />
              </a>
            </ModalBody>
          </Modal>
        </span>
      </Router>
    );
  }
}

export default App;
