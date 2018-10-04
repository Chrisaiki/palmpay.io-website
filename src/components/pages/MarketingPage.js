import React from "react";
import { Button, Collapse } from "mdbreact";
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

// Custom components
import AppHeader from '../AppHeader';
import Footer from '../Footer';

/**
 * Marketing page component.
 */
class MarketingPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.onClick4 = this.onClick4.bind(this);
    this.state = {
      collapse: false,
      accordion: false,
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onClick1() {
    let state = "";

    if (this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  onClick2() {
    let state = "";

    if (this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  onClick3() {
    let state = "";

    if (this.state.accordion !== 3) {
      state = 3;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  onClick4() {
    let state = "";

    if (this.state.accordion !== 4) {
      state = 4;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  render() {
    const whiteSpaceheight = (this.state.height > 602) ? this.state.height - 602: 0;
    return (
      <div>
      <AppHeader />
      <div id="maincontent">
      <section data-spy="scroll" data-target="#mainNav" id="services">
      <div className="containerfix">
      <div className="row">
      <div className="col-md-10 mx-md-auto">
      <div>
      <div>
      <Button
      block
      color="primary"
      onClick={this.onClick1}
      style={{ marginBottom: "1rem" }}>
      <FormattedMessage id="marketing.button.presentations" />
      </Button>
      </div>
      <Collapse isOpen={this.state.accordion === 1}>
      <div className="list-group">
      <FormattedHTMLMessage id="marketing.accordion.presentations1" />
      <FormattedHTMLMessage id="marketing.accordion.presentations2" />
      <FormattedHTMLMessage id="marketing.accordion.presentations3" />
      </div>
      </Collapse>

      <div>
      <Button
      block
      color="primary"
      onClick={this.onClick2}
      style={{ marginBottom: "1rem" }}>
      <FormattedMessage id="marketing.button.flyers" />
      </Button>
      </div>
      <Collapse isOpen={this.state.accordion === 2}>
      <div className="list-group">
      <FormattedHTMLMessage id="marketing.accordion.flyers1" />
      <FormattedHTMLMessage id="marketing.accordion.flyers2" />
      <FormattedHTMLMessage id="marketing.accordion.flyers3" />
      <FormattedHTMLMessage id="marketing.accordion.flyers4" />
      <FormattedHTMLMessage id="marketing.accordion.flyers5" />
      <FormattedHTMLMessage id="marketing.accordion.flyers6" />
      <FormattedHTMLMessage id="marketing.accordion.flyers7" />
      <FormattedHTMLMessage id="marketing.accordion.flyers8" />
      <FormattedHTMLMessage id="marketing.accordion.flyers9" />
      <FormattedHTMLMessage id="marketing.accordion.flyers10" />
      </div>
      </Collapse>

      <div>
      <Button
      block
      color="primary"
      onClick={this.onClick3}
      style={{ marginBottom: "1rem" }}>
      <FormattedMessage id="marketing.button.business_cards" />
      </Button>
      </div>
      <Collapse isOpen={this.state.accordion === 3}>
      <div className="list-group">
      <FormattedHTMLMessage id="marketing.accordion.business_cards1" />
      <FormattedHTMLMessage id="marketing.accordion.business_cards2" />
      </div>
      </Collapse>
      <div>
      <Button
      block
      color="primary"
      onClick={this.onClick4}
      style={{ marginBottom: "1rem" }}>
      <FormattedMessage id="marketing.button.promotional_displays" />
      </Button>
      </div>
      <Collapse isOpen={this.state.accordion === 4}>
      <div className="list-group">
      <FormattedHTMLMessage id="marketing.accordion.promotional_displays1" />
      </div>
      </Collapse>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Add dynamic white spaces */}
      <div className="dynamic-white-space" style={{height: whiteSpaceheight}}>
      </div>
      <Footer />
      </div>
  );
  }
}

export { MarketingPage };
