import React from "react";
import "./section-tablist-tech.css";
import Container from "@material-ui/core/Container";
import CenteredTabs from "../component/tab-list/tab-list";

const SectionTablistTech = () => {
  return (
    <div className="section-tablist">
      <Container maxWidth="lg" id="tablist-container__section" justify="center">
        <h1
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Technologies we work with
        </h1>
        <CenteredTabs />
      </Container>
    </div>
  );
};

export default SectionTablistTech;
