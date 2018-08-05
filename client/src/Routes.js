import React from "react";
import { Route, Switch } from "react-router-dom";

// FREE
import HomePage from "./pages/HomePage";
import MarketingPage from "./pages/MarketingPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* FREE */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/marketing" component={MarketingPage} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
