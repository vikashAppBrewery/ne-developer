import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./section1-services.css";
import AllServicesImage from "../../../assets/all-services.svg";

const Section1Services = () => {
  return (
    <Container maxWidth="lg" id="section1__services">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} className="section1__services-img">
          <h1>Our Services</h1>
        </Grid>
        <Grid item xs={12} lg={6} className="section1__services-img">
          <img src={AllServicesImage} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section1Services;
