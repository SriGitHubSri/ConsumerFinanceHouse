import PropTypes from "prop-types";
import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Navigate from "../constants/routes-constant";
import QuotesContainer from "../container/quotes-container";
import FinanceHouseContainer from "../container/finance-house-container";
import FormContainer from "../container/form-container";
import HomeContainer from "../container/home-container";
import DealerContainer from "../container/Dealer-container";
import Navbar from "../component/navbar";


const Routes = (props) => (
  <Switch>
    <Route
      exact
      path={Navigate.ROOT}
      render={(routeProps) => <HomeContainer {...routeProps} />}
    />
    <Route
      exact
      path={Navigate.TO_HOME}
      render={(routeProps) => <HomeContainer {...routeProps} />}
    // render={(routeProps) => (
    //   <Navbar {...routeProps}>
    //   <FinanceHouseContainer {...routeProps} />
    //   </Navbar>
    // )}
    />
    <Route
      exact
      path={Navigate.TO_FINHOUSE}
      render={(routeProps) => <FinanceHouseContainer {...routeProps} />}
    />
    <Route
      exact
      path={Navigate.TO_QUOTES}
      render={(routeProps) => <QuotesContainer {...routeProps} />}
    />
    <Route
      exact
      path={Navigate.TO_FORM}
      render={(routeProps) => <FormContainer {...routeProps} />}
    />
    <Route
      exact
      path={Navigate.TO_DEALER}
      render={(routeProps) => <DealerContainer {...routeProps} />}
    />
  </Switch>
);

Routes.defaultProps = {
  loggedIn: false,
  searchComplete: false,
};

Routes.propTypes = {
  loggedIn: PropTypes.bool,
  searchComplete: PropTypes.bool,
};

export default Routes;
