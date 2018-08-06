import {
  Navbar,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container
} from "mdbreact";
import { Link } from "react-scroll";
import React from "react";

class HomeNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showmenu: true };
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
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

  render() {
    return (
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
            <img alt="" className="logo1" src="./img/logo.png" width="100%" />
            <img
              alt=""
              className="logo2"
              src="./img/logo54.png"
              width="100%"
              style={{ display: "none" }}
            />
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
                  <span id="nav_lang1">Services</span>
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
                  <span id="nav_lang2">About</span>
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
                  <span id="nav_lang3">Testimonies</span>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink to="#!" onClick={this.toggle2}>
                  <span id="nav_lang4">Downloads</span>
                </NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default HomeNav;
