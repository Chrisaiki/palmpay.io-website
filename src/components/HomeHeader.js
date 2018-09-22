import React from "react";
import { Link } from "react-scroll";
import {
  Collapse,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Navbar,
  NavbarNav,
  NavbarToggler,
  NavItem,
  NavLink
} from "mdbreact";
import { FormattedMessage } from 'react-intl';

// Images
import HeaderLogo from '../assets/img/header/logo.png';

/**
 * The header of the home page.
 */
class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showmenu: true };
    this.state = {
      collapse: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggleModal() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  handleNavbarClick() {
    this.setState({
      collapse: false
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" fixed="top" id="mainNav" scrolling>
          <Container className="menuc" hidden={this.state.showmenu}>
            <Link
              activeClass="active"
              className="navbar-brand"
              to="home"
              href="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}>
              <img alt="" className="logo1" src={HeaderLogo} width="100%" />
            </Link>

            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav right>
                <NavItem>
                  <Link
                    activeClass="active"
                    className="nav-link"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}>
                    <span id="nav_lang1">
                      <FormattedMessage id="header.services" />
                    </span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    activeClass="active"
                    className="nav-link"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}>
                    <span id="nav_lang2">
                      <FormattedMessage id="header.about" />
                    </span>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    activeClass="active"
                    className="nav-link"
                    href="#testimonies"
                    to="testimonies"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}>
                    <span id="nav_lang3">
                      <FormattedMessage id="header.testimonies" />
                    </span>
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink to="#!" onClick={this.toggleModal}>
                    <span id="nav_lang4">
                      <FormattedMessage id="header.downloads" />
                    </span>
                  </NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
        <Modal isOpen={this.state.modal2} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
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
      </div>
    );
  }
}

export default HomeHeader;
