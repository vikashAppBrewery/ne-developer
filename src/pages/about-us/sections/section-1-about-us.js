import React from "react";
import Container from "@material-ui/core/Container";
import "./section-1-about-us.css";
import Grid from "@material-ui/core/Grid";
import ImageHeader from "../../../assets/section-about-header.svg";

import Box from "@material-ui/core/Box";
import SimpleModal from "../../qoute-form/form-qoute";
const SectionAboutUs1 = () => {
  return (
    <Container max-width="lg" id="section-about__us">
      <Grid container spacing={1}>
        <Grid
          item
          lg={6}
          xs={12}
          sm={12}
          className="section-about__header"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1>Hi! we’re NE Developers</h1>
          <p>
            Established in Gangtok, Sikkim, Ne developers has been designing &
            coding digital things since 2017.
          </p>
          <p>
            We're an experienced team that can be involved in all stages of a
            project, from the earliest concepts all the way through to launch.
            How can we help you?
          </p>
          <Box align="center" className="Box-btn">
            <SimpleModal />
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          sm={12}
          className="section-about__image"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img src={ImageHeader} alt="section-img" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAboutUs1;
