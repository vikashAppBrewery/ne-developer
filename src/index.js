import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContactPage from "./pages/contact-us/contact-page";
import PageAboutUs from "./pages/about-us/about.-us";
import AllServices from "./pages/All-services/all-services";

import ScrollToTopRoute from "./scrolltoTop";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <ScrollToTopRoute path="/about-us" component={PageAboutUs} />
      <ScrollToTopRoute path="/contact-us" component={ContactPage} />
      <ScrollToTopRoute path="/all-services" component={AllServices} />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
