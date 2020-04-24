import React from "react";
import "./contact-us.css";
import Card from "@material-ui/core/Card";
import Header from "../home/component/nav-bar/nav-bar";
import FooterNavigation from "../home/component/footer/footer";
import MyForm from "./component/form";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ContactImage } from "../../assets/contact-image-header.svg";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="contact-container__img"></div>
      <Container maxWidth="lg">
        <Grid container className="contact-container">
          <Grid item xs={12} md={6} className="contact-us-content">
            <h1>Address</h1>
            <p>
              New bazar <br />
              Gangtok sikkim <br />
              737101
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
