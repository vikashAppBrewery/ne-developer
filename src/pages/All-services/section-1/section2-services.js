import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./section2-services.css";
import ExpandableCard from "./components/card-expandable";
import ExpandableCard2 from "./components/card-expandbable-web";

const Section2Services = () => {
  return (
    <Container max-width="xl">
      <h1 className="section2-services__header">All Services</h1>
      <Grid container>
        <Grid item xs={12} lg={12} className="section1__services___services">
          <ExpandableCard />
        </Grid>
        <Grid item xs={12} lg={12} className="section1__services___services">
          <ExpandableCard2 id="expandable-card__2" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section2Services;
