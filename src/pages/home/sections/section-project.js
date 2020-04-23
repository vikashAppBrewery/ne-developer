import React from "react";
import "./section-project.css";
import Container from "@material-ui/core/Container";

import ProjectCard from "../component/card-project/project-card";
import ProjectCard2 from "../component/card-project/project-card-2";

const ProjectSection = () => {
  return (
    <Container maxWidth="lg">
      <h1
        className="project-section-title"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Our Works
      </h1>
      <ProjectCard />
      <ProjectCard2 />
    </Container>
  );
};

export default ProjectSection;
