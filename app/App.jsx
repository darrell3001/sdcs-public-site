import React from "react";
import importedComponent from "react-imported-component";
import { Helmet } from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HelloWorld from "./HelloWorld";

import "./css/styles.scss";

const HelloWorld2 = importedComponent(() => import("./HelloWorld2"));

export default function App() {
  return (
    <div className="app-container">
      <Helmet defaultTitle="SDCS">
        <meta charSet="utf-8" />
      </Helmet>
      <Header />
      <div className="spacer"></div>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/codeSplit" component={HelloWorld2} />
        <Redirect to="/"/>
      </Switch>
      <Footer />
    </div>
  );
}
