import {
  Navbar,
  NavbarNav,
  NavbarToggler,
  Collapse,
  Container
} from "mdbreact";
//import { Link } from "react-scroll";
import React from "react";

/**
 * The header of the marketing page.
 */
class MarketingHeader extends React.Component {
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
      <Navbar
        dark
        expand="md"
        fixed="top"
        id="mainNav"
        scrolling
        className="top-nav-collapse">
        <Container hidden={this.state.showmenu}>
          <a activeClass="active" className="navbar-brand" href="/">
            <img alt="" className="logo1" src="./img/logo.png" width="100%" />
            <img
              alt=""
              className="logo2"
              src="./img/logo54.png"
              width="100%"
              style={{ display: "none" }}
            />
          </a>

          <NavbarToggler onClick={this.onClick} />
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav right />
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MarketingHeader;
