import React from "react";
import "./contact-us.css";
import Card from "@material-ui/core/Card";
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
          <Grid item xs={12} md={6} className="contact-us-content">
            <h1>Address</h1>
            <h2>
              <img src={Map} />
              Main office:
            </h2>
            <p>
              New bazar Gangtok sikkim <br />
              737101
            </p>

            <h2>
              <img src={Map} />
              Branch office:
            </h2>
            <p>
              Coimbatore, Themaiyan Street <br /> Koundampalayam, Coimbatore
              <br /> Tamil Nadu <br /> 641030
            </p>
            <p>
              D-block AECS layout <br /> Kundlahalli, Marathahalli
              <br /> Karnataka <br /> 560037
            </p>
            <h1>Customer Support</h1>
            <p>
              <img src={Phone} />
              +91-9789939112
            </p>
            <p>
              <img src={Phone} />
              +91-8610043765
            </p>
          </Grid>
          <Grid item xs={12} md={6} className="contact-us-form">
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
