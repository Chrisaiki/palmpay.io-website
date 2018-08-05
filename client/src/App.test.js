import React from 'react';
import { Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Footer, NavLink, Mask, Row, Col, Fa, View, Container, Modal, ModalBody, ModalHeader, ModalFooter} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './static/css/palmpay.css';
 
//import './css/csslider.css';

import Routes from './Routes';

class App extends React.Component {


  constructor(props) {
    super(props),
    this.state = {
      collapse : false,
	  modal2: false
    }
	this.toggle2 = this.toggle2.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

    toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
}

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }
  render(){
  const collapsed = this.state.collapsed;
  const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
    return (
	        <Router>
        <div id="apppage" className="flyout">

            <Navbar dark expand="md" fixed="top" id="mainNav" scrolling>
              <Container>
                <NavbarBrand>
                  <img className="logo1" src="./img/logo.png" width="100%"></img>
                  <img className="logo2" src="./img/logo54.png"  width="100%" style={{display: 'none'}}></img>
                </NavbarBrand>
                <NavbarToggler onClick = { this.onClick } />
                <Collapse isOpen = {this.state.collapse} navbar>
                  <NavbarNav right>
                    <NavItem>
                      <NavLink to="#services"><span id="nav_lang1">Services</span></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#about"><span id="nav_lang2">About</span></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#testimonies"><span id="nav_lang3">Testimonies</span></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!" onClick={this.toggle2}><span id="nav_lang4">Downloads</span></NavLink>
                    </NavItem>
					<NavItem>
					</NavItem>
                  </NavbarNav>
                 <ul className="nav navbar-nav navbar-right fix-li-menu" multilinks-noscroll="true" id="langs"></ul>
                </Collapse>
              </Container>
            </Navbar>
            { collapsed && overlay}
            <Routes />

       <Footer className="footer text-center">
        <div className="containerfix">
            <Row className="vertical-align">
                <Col md="4">
                    <img src="./img/footerlogo.png"></img>
                </Col>

                <Col md="4">
                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a target="_blank" href="https://t.me/Agorise">
                                <i className="fa fa-telegram"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" href="https://twitter.com/Agorise_world">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" href="https://youtube.com/Agorise">
                                <i className="fa fa-youtube"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" href="https://d.tube/c/agorise">
                                <img src="./img/dtube.png"></img>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" href="https://steemit.com/@Agorise">
                                <img src="./img/steemit.png"></img>
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
        </div>
     </Footer>



	 <div className="copyright py-3 text-center text-white" style={{fontSize:'0.8em'}}>
        <div className="containerfix">
            <div className="row vertical-align">
                <div className="col-md-12">
                    <p>
                        <span id="cp_lang1">
                            This website is not intended as legal or financial advice, is not a guarantee of anything and we do not collect any info about you whatsoever. PalmPay is a Point Of Sale product by Agorise, Ltd. For technical details, chat anytime 24/7 with the Agorise community on Telegram at:
                            <a  target="_blank" href="http://t.me/Agorise"> http://t.me/Agorise</a>
                        </span>
                    </p>
                </div>


            </div>
            <div className="row vertical-align">

                <div className="col-md-4"></div>
                <div className="col-md-4">

                   <small>&copy; Copyright {(new Date().getFullYear())} <a target="_blank" href="http://agorise.world/"> Agorise Ltd. </a></small>

                </div>

            </div>

        </div>
    </div>

 <Modal isOpen={this.state.modal2} toggle={this.toggle2}>
  <ModalHeader toggle={this.toggle2}><span id="mdl_lang1">Downloads</span></ModalHeader>
  <ModalBody className="text-center">
    <a target="_blank" href="https://play.google.com/store/apps/details?id=cy.agorise.palmpay"><img className="logo1" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" height="60" width="auto"></img></a>
  </ModalBody>
</Modal>
        </div>
</Router>
    );
  }
}

export default App;
