import React from 'react';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Route, Switch } from 'react-router-dom';

// Custom components
import {
  AmbassadorsPage,
  HomePage,
  MarketingPage,
  MerchantsPage,
  NotFoundPage
} from './pages';

/**
 * The main App component - Route all the pages.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showmenu: true };
    this.state = {
      collapse: false,
      modal2: false
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
  componentDidMount() {
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

  render() {
    const collapsed = this.state.collapsed;
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleNavbarClick}
      />
    );
    return (
      <span id="apppage">
        <Switch>
          <Route exact path="/" title="Palmpay" component={HomePage} />
          <Route exact path="/ambs" title="PalmPay Ambassadors" component={AmbassadorsPage} />
          <Route exact path="/marketing" title="PalmPay Marketing" component={MarketingPage} />
          <Route exact path="/merchants" title="PalmPay Merchants" component={MerchantsPage} />
          <Route title="PalmPay Page Not Found" component={NotFoundPage} />
        </Switch>
        {collapsed && overlay}
      </span>
    );
  }
}

export default App;
