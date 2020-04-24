import React from "react";
import Container from "@material-ui/core/Container";
import "./section-1-about-us.css";
import Grid from "@material-ui/core/Grid";
import ImageHeader from "../../../assets/section-about-header.svg";
import AnimatedBtn from "../../home/component/button/button";
import Box from "@material-ui/core/Box";
const SectionAboutUs1 = () => {
  return (
    <Container max-width="lg" id="section-about__us">
      <Grid container spacing={1}>
        <Grid item lg={6} xs={12} sm={12} className="section-about__header">
          <h1>Hi, we’re ne developers</h1>
          <p>
            Established in Gangtok sikkim, Ne developers has been designing &
            coding digital things since 2017.
          </p>
          <p>
            We're an experienced team that can be involved in all stages of a
            project, from the earliest concepts all the way through to launch.
            How can we help you?
          </p>
          <Box align="center" className="Box-btn">
            <AnimatedBtn title="Request A Qoute" />
          </Box>
        </Grid>
        <Grid item lg={6} xs={12} sm={12} className="section-about__image">
          <img src={ImageHeader} alt="section-img" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAboutUs1;
