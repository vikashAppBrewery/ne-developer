import React from "react";
import Navbar from "../home/component/nav-bar/nav-bar";
import FooterNavigation from "../home/component/footer/footer";
import Section2AboutUs from "./sections/section-2-about-us";
import SectionAboutUs1 from "./sections/section-1-about-us";
const PageAboutUs = () => {
  return (
    <div className="page-about__us">
      <Navbar />
      <SectionAboutUs1 />
      <Section2AboutUs />
      <FooterNavigation />
    </div>
  );
};

export default PageAboutUs;
