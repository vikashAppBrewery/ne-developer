import React from "react";
import "./section-2-about-us.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Team from "../../../assets/team-about.svg";
import Collaboration from "../../../assets/collbaration.svg";
import Launch from "../../../assets/space-ship.svg";

const Section2AboutUs = () => {
  return (
    <Container max-width="lg" id="section-about-us__2">
      <h1 data-aos="fade-up" data-aos-duration="2000">
        Belief of ne-developers
      </h1>
      <Grid
        container
        spacing={1}
        justify="center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Grid item lg={4} xs={12} sm={12}>
          <Paper elevation={0} className="paper-about-customer__approach">
            <img src={Team} alt="process" />
            <h2>Client-centric Approach</h2>
            <p>
              For any business, customers are always at the center. Being a
              leading web and mobile app development company, our definition
              goes beyond our direct customers. We always start from where you
              are with your ideas and we think from YOUR end customers'
              perspectives, their pain areas and devise a solution that solves
              core problems to benefit your business.
            </p>
          </Paper>
        </Grid>
        <Grid item lg={4} xs={12} sm={12}>
          <Paper elevation={0} className="paper-about-customer__approach">
            <img src={Collaboration} alt="process" />
            <h2>Effective Collaboration</h2>
            <p>
              Communication is the Key. We tend to over-communicate at times.
              Although sounds overwhelming, but eventually it works wonders for
              our client business. When our development team collaborates with
              our clients sitting a thousand miles away, it's apparent that we
              stay in touch with platforms and mediums that allow effectiveness,
              transparency, and accuracy.
            </p>
          </Paper>
        </Grid>
        <Grid item lg={4} xs={12} sm={12}>
          <Paper elevation={0} className="paper-about-customer__approach">
            <img src={Launch} alt="process" />
            <h2>Quality Delivered in Time</h2>
            <p>
              With over two decades of experience in the offshore IT software
              development industry, we have a great set of internal frameworks
              with best-in-class infrastructure that enables us to deliver
              solutions with superior quality, at all times. All these years, we
              have learned how to prevent failures and replicate success. We
              don't just brag about quality. We define and deliver it in time.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section2AboutUs;
