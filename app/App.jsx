import React, { Component } from "react";
import importedComponent from "react-imported-component";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HelloWorld from "./HelloWorld";
import Flexstart from "./components/Flexstart";

import "./css/styles.scss";

const HelloWorld2 = importedComponent(() => import("./HelloWorld2"));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block",
    };
    this.removeHeaderFooter = this.removeHeaderFooter.bind(this);
  }
  
  removeHeaderFooter() {
    this.setState({
      display: "none"
    });
  }

  render() {
    return (
      <div className="app-container">
          <Helmet defaultTitle="SDCS">
            <meta charSet="utf-8" />
          </Helmet>
          <Header display={this.state.display}/>
          <div style={{ display: this.state.display }} className="spacer-header"></div>
          <Switch>
            <Route exact path="/" component={HelloWorld} />
            <Route path="/codeSplit" component={HelloWorld2} />
            <Route path="/flexstart" render={ () => <Flexstart removeHeaderFooter={this.removeHeaderFooter}/> }/>
            <Redirect to="/"/>
          </Switch>
          <Footer display={this.state.display}/>
      </div>
    );
  }
}
