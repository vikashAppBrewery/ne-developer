import React from "react";
import "./contact-us.css";

import Header from "../home/component/nav-bar/nav-bar";
import FooterNavigation from "../home/component/footer/footer";
import MyForm from "./component/form";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Map from "../../assets/map.svg";
import Phone from "../../assets/phone.svg";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="contact-container__img"></div>
      <Container maxWidth="lg">
        <Grid container className="contact-container">
          <Grid
            item
            xs={12}
            md={6}
            className="contact-us-content"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1>Address</h1>
            <h2>Main Branch:</h2>
            <h2>
              <img src={Map} alt="Address" />
              Sikkim
            </h2>
            <p>
              Opp. State Bank of Sikkim <br />
              Metro point, Tadong
              <br />
              Gangtok, East Sikkim
              <br />
              737102
            </p>

            <h2>Branch offices:</h2>

            <h2>
              <img src={Map} alt="Address" />
              Tamil Nadu
            </h2>
            <p>
              Near post office, Themaiyan Street <br /> Koundampalayam,
              Coimbatore
              <br /> Tamil Nadu <br /> 641030
            </p>

            <h2>
              <img src={Map} alt="Address" />
              Karnataka
            </h2>
            <p>
              D-block AECS layout <br /> Kundlahalli, Marathahalli
              <br /> Karnataka <br /> 560037
            </p>
            <h1>Customer Support</h1>
            <p>
              <img src={Phone} alt="Phone" />
              +91-9894178970
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="contact-us-form"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1>Contact us</h1>
            <p>
              We're ready to answer your questions and jump start your project.
            </p>
            <MyForm />
          </Grid>
        </Grid>
      </Container>

      <FooterNavigation />
    </div>
  );
};

export default ContactPage;
