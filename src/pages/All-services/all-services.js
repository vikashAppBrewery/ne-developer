import React from "react";
import "./all services.css";
import Section1Services from "./section-1/section1-services";
import Header from "../home/component/nav-bar/nav-bar";
import FooterNavigation from "../home/component/footer/footer";
import Section2Services from "./section-1/section2-services";

const AllServices = () => {
  return (
    <div>
      <Header />
      <Section1Services />
      <Section2Services />
      <FooterNavigation />
    </div>
  );
};

export default AllServices;
