import React from "react";
import Navbar from "../home/component/nav-bar/nav-bar";
import FooterNavigation from "../home/component/footer/footer";
import Container from "@material-ui/core/Container";
import SectionAboutUs1 from "./sections/section-1-about-us";
const PageAboutUs = () => {
  return (
    <div className="page-about__us">
      <Navbar />
      <SectionAboutUs1 />
      <FooterNavigation />
    </div>
  );
};

export default PageAboutUs;
