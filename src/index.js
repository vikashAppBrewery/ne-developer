import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import Home from "./pages/home/home";
import { BrowserRouter, Route } from "react-router-dom";
import ContactPage from "./pages/contact-us/contact-page";
import PageAboutUs from "./pages/about-us/about.-us";
import AllServices from "./pages/All-services/all-services";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about-us" component={PageAboutUs} />
      <Route path="/contact-us" component={ContactPage} />
      <Route path="/all-services" component={AllServices} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
