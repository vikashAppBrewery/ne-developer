import React from "react";
import "./section-3-about-us.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Boy from "../../../assets/team-icon/boy.svg";
import Man from "../../../assets/team-icon/man.svg";
import Girl from "../../../assets/team-icon/girl.svg";
import Man1 from "../../../assets/team-icon/man-1.svg";
import Box from "@material-ui/core/Box";
const Section3AboutUs = () => {
  return (
    <Container max-width="md" id="section-about-us-meet__team">
      <h1 data-aos="fade-up" data-aos-duration="2000">
        Meet Our Team
      </h1>
      <p
        className="section-paragraph-team"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Nedevelopers is an experienced team of coders & creatives that you’ll
        love working with.
      </p>

      <Grid container spacing={3} data-aos="fade-up" data-aos-duration="2000">
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          className="section-about__us-image_icon"
        >
          <Box justifyContent="center" text-align="center" align="center">
            <img src={Boy} alt="boy-icon" />
            <p>vikash kumar</p>
            <p>Web developer</p>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          className="section-about__us-image_icon"
        >
          <Box justifyContent="center" text-align="center" align="center">
            <img src={Man} alt="boy-icon" />
            <p>vikash kumar</p>
            <p>Web developer</p>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          className="section-about__us-image_icon"
        >
          <Box justifyContent="center" text-align="center" align="center">
            <img src={Girl} alt="boy-icon" />
            <p>vikash kumar</p>
            <p>Web developer</p>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          className="section-about__us-image_icon"
        >
          <Box justifyContent="center" text-align="center" align="center">
            <img src={Man1} alt="boy-icon" />
            <p>vikash kumar</p>
            <p>Web developer</p>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section3AboutUs;
