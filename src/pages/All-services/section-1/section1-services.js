import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./section1-services.css";
import AllServicesImage from "../../../assets/all-services.svg";
import AnimatedBtn from "../../home/component/button/button";
import Box from "@material-ui/core/Box";

const Section1Services = () => {
  return (
    <Container maxWidth="lg" id="section1__services">
      <Grid container>
        <Grid item xs={12} lg={6} className="section1__services-img">
          <img src={AllServicesImage} alt="" />
        </Grid>
        <Grid item xs={12} lg={6} className="section1__services-header">
          <h1>Our Services</h1>
          <h3>
            We are a web solutions company with a difference. When the thought
            of a web solutions company based in India comes up, the idea of a
            company that may be able to provide low prices but is unable to
            understand the requirements of global clients and can't work to
            international standards may come up - that's NOT us! We are
            listening to our customers 24x7. We learn your business idea and
            objectives. We discuss, plan and deliver customized solution to
            enable you to get maximum benefit in competitive market. We strive
            to achieve the best for you. We are known for our unparalleled
            services. Our services will help you to grow your business faster
            than ever before. Take a look at some of the major services we
            offer.
          </h3>
          <Box align="center">
            <AnimatedBtn title="Request A Qoute" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section1Services;
