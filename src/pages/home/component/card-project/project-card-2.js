import React from "react";
import "./project-card-2.css";
import Grid from "@material-ui/core/Grid";
import Mockup from "../../../../assets/ne-dev.png";
import Card from "@material-ui/core/Card";

const ProjectCard2 = () => {
  return (
    <Card
      className="MuiCard-root-1"
      elevation={2}
      className="project-card-2"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <Grid container>
        <Grid item sm={5} xs={12}>
          <div className="project-card-img-2">
            <img src={Mockup} alt="mockup-uru" />
          </div>
        </Grid>
        <Grid item sm={7} xs={12}>
          <div className="project-card-content">
            <h3>uruvelaa solutions</h3>
            <h1>An AI ML based startup company landing website</h1>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectCard2;
