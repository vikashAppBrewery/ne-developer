import React from "react";
import "./section-dev.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Process from "../../../assets/process-dev.svg";
import Design from "../../../assets/design.svg";
import CardDeveloperComponent from "../component/card-dev/card-dev";
import Build from "../../../assets/coding.svg";
import Deploy from "../../../assets/deployment.svg";
import Box from "@material-ui/core/Box";

import SimpleModal from "../../qoute-form/form-qoute";
import { Link } from "react-router-dom";

const SectionDevelopment = (props) => {
  return (
    <section className="section-development">
      <h1 data-aos="fade-up" data-aos-duration="2000">
        We Simplify Software Development Process
      </h1>
      <Container
        maxWidth="lg"
        id="container-development"
        justify="center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3} sm={6}>
            <CardDeveloperComponent
              imgSrc={Process}
              header="Discover"
              title="We shape brands through exploration, applying in-depth research to challenge assumptions at every turn."
            />
          </Grid>

          <Grid item xs={12} lg={3} sm={6}>
            <CardDeveloperComponent
              imgSrc={Design}
              header="Design"
              title="Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users."
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <CardDeveloperComponent
              imgSrc={Build}
              header="Build"
              title="Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions."
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <CardDeveloperComponent
              imgSrc={Deploy}
              header="Deploy"
              title="We take an iterative approach to both our work and our practice, always looking for ways to improve what we do."
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" id="Animated__btn">
          <SimpleModal />
        </Box>
      </Container>
    </section>
  );
};

export default SectionDevelopment;
