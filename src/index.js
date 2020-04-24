import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import Home from "./pages/home/home";
import { BrowserRouter, Route } from "react-router-dom";
import ContactPage from "./pages/contact-us/contact-page";
import PageAboutUs from "./pages/about-us/about.-us";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about-us" component={PageAboutUs} />
      <Route path="/contact-us" component={ContactPage} />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
