import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactPage from "./pages/contact-us/contact-page";
import PageAboutUs from "./pages/about-us/about.-us";
import AllServices from "./pages/All-services/all-services";

import ScrollToTopRoute from "./scrolltoTop";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <ScrollToTopRoute path="/about-us" exact component={PageAboutUs} />
      <ScrollToTopRoute path="/contact-us" exact component={ContactPage} />
      <ScrollToTopRoute path="/all-services" exact component={AllServices} />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
