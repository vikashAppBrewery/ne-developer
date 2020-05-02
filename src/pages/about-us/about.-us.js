import React from "react";
import Navbar from "../home/component/nav-bar/nav-bar";
import FooterNavigation from "../home/component/footer/footer";
import Section2AboutUs from "./sections/section-2-about-us";
import "./about-us.css";
import SectionAboutUs1 from "./sections/section-1-about-us";
import Section3AboutUs from "./sections/section-3-about-us";
import Box from "@material-ui/core/Box";
import SimpleModal from "../qoute-form/form-qoute";
const PageAboutUs = () => {
  return (
    <div className="page-about__us">
      <Navbar />
      <SectionAboutUs1 />
      <Section2AboutUs />
      <div
        className="page-about__qoute"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1>
          “Your website is the center of your digital eco-system, like a brick
          and mortar location, the experience matters once a customer enters,
          just as much as the perception they have of you before they walk
          through the door.”
        </h1>
      </div>
      <Section3AboutUs />
      <h1
        className="Header_______qoute-us"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Interested in working with us?
      </h1>
      <Box
        align="center"
        className="box-button-under__team"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <SimpleModal />
      </Box>
      <FooterNavigation />
    </div>
  );
};

export default PageAboutUs;
