import React from "react";
import "./contact-us.css";
import Card from "@material-ui/core/Card";
import Header from "../home/component/nav-bar/nav-bar";
import FooterNavigation from "../home/component/footer/footer";
import MyForm from "./component/form";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Card elevation={2} className="contact-container">
        <MyForm />
      </Card>
      <FooterNavigation />
    </div>
  );
};

export default ContactPage;
