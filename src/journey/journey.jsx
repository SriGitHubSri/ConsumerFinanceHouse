import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import ConnectedApp from "./routes";
import { Navbar } from "../component/navbar";
import { connect } from "react-redux";
import * as Navigate from "../constants/routes-constant";

// Anand: made this a component to accomodate Navbar
export class App extends Component {
  render() {
    const { onQuote, onForm, onHome, onDealerForm } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        {/* <Router>  Anand: moved router to index.js to wrap this component around 'withRouter' which mandatory to correctly update the history and pagenavigation */}
        <Navbar {...this.props}></Navbar>
        <Switch>
          <Route path="/" component={ConnectedApp} />
        </Switch>
        {/* </Router> */}
      </React.Fragment>
    );
  }
}

App.propTypes = {};

App.defaultProps = {};

export const mapStateToProps = (state) => ({
  fullState: state,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onQuote: () => {
    ownProps.history.push(Navigate.TO_QUOTES);
  },
  onForm: () => {
    //console.log(ownProps);
    ownProps.history.push(Navigate.TO_FORM);
  },
  onHome: () => {
    ownProps.history.push(Navigate.TO_HOME);
  },
  onDealerForm: () => {
    ownProps.history.push(Navigate.TO_DEALER);
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
