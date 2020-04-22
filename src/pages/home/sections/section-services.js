import React from "react";
import "./section-services.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardServices from "../component/card-serivces/card-services_home";
import AppDev from "../../../assets/app-dev.svg";
import WebDev from "../../../assets/web-dev.svg";
import UiDev from "../../../assets/ui-dev.svg";
import BranDev from "../../../assets/bran-dev.svg";
import StarDev from "../../../assets/star-dev.svg";
import PrintEvent from "../../../assets/print-event.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

class SectionServices extends React.Component {
  render(props) {
    return (
      <div className="section-services__home">
        <Container max-width="xl" id="section-services__card" spacing={5}>
          <h1
            className="section-services__header"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            We specialise in{" "}
          </h1>
          <Grid
            container
            direction="row"
            justify="center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <CardServices imgSrc={AppDev} titleservices="App Development" />
            <CardServices imgSrc={WebDev} titleservices="Web Development" />
            <CardServices imgSrc={UiDev} titleservices="UI/UX Development" />
          </Grid>
          <Grid
            container
            justify="center"
            direction="row-reverse"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <CardServices imgSrc={PrintEvent} titleservices="Print & Event" />
            <CardServices
              imgSrc={StarDev}
              titleservices="Startup Development"
            />
            <CardServices imgSrc={BranDev} titleservices="Brand & Identity" />
          </Grid>
        </Container>
      </div>
    );
  }
}

export default SectionServices;
