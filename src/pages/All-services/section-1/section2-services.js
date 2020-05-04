import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./section2-services.css";
import ExpandableCard from "./components/card-expandable";
import ExpandableCard2 from "./components/card-expandbable-web";
import ExpandableCard3 from "./components/card-expandable-ux";
import ExpandableCard4 from "./components/card-expandable-graphic";

const Section2Services = () => {
  return (
    <Container max-width="xl">
      <h1
        className="section2-services__header"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        All Services
      </h1>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={12}
          className="section1__services___services"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <ExpandableCard id="mobile-dev" />
        </Grid>
        <Grid
          item
          xs={12}
          lg={12}
          className="section1__services___services"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <ExpandableCard2 id="expandable-card__2" />
        </Grid>
        <Grid
          item
          xs={12}
          lg={12}
          className="section1__services___services"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <ExpandableCard3 id="expandable-card__2" />
        </Grid>
        <Grid
          item
          xs={12}
          lg={12}
          className="section1__services___services"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <ExpandableCard4 id="expandable-card__2" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section2Services;
