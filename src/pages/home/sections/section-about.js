import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./section-about.css";
import AboutSectionBg from "../../../assets/about-team.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.refresh();

const SectionAbout = () => {
  return (
    <section className="about-us__home">
      <Container maxWidth="xl" id="container-header" justify="center">
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src={AboutSectionBg}
              alt="about"
              className="about-section__bg"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className="home-herotext__container"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="About-hero__content">
              <h1>About us</h1>
              <span>
                NE DEVELOPER is not an entity, it’s a family that represents
                togetherness for over two decades of a successful journey. For
                NE DEVELOPER, the definition of success is to transcend
                innovative ideas of people to reality with the help of our tech
                expertise, this is what we, as a Team, want to be remembered
                for! Our vision has led NE DEVELOPER to become a top IT company
                in India & USA for delivering various industry-led mobility
                solutions. The goal is to empower clients and businesses by
                creating new possibilities leveraging the technologies of today
                and tomorrow with the utmost quality, satisfaction, and
                transparency <br />
                <a href="/">find out more</a>
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionAbout;
