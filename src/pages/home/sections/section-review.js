import React from "react";
import "./section-review.css";
import Container from "@material-ui/core/Container";
import ReviewCard from "../component/review-card/card-review";
import Grid from "@material-ui/core/Grid";
import Uruvelaa from "../../../assets/uruvelaa.png";
import Sikkim from "../../../assets/sikkim.png";

const SectionReview = () => {
  return (
    <Container id="review-container" max-width={"lg"}>
      <div className="section-review__header">
        <h1>What customer say about us</h1>
        <p>
          We're an experienced team who you will love working with. <br /> But
          don't just take our word for it. See what some of our clients have to
          say.
        </p>
      </div>
      <Grid container spacing={4} justify="center">
        <Grid item lg={3} xs={12}>
          <ReviewCard
            AvatarSrc={Uruvelaa}
            AvatarTitle="Nitesh Kumar"
            AvatarSubheader="Uruvelaa solution pvt ltd"
            CardContentMain="It has been great to work with Ne-developers. Their enthusiasm, knowledge and drive were evident from the start. They really added value to the project and I look forward to working together again."
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <ReviewCard
            AvatarSrc={Sikkim}
            AvatarTitle="Gaurav agarwal"
            AvatarSubheader="sikkim goverment"
            CardContentMain="We have used ne developers extensively, and we keep going back. That's because the ne developers team meet all of our core requirements. I highly recommend you engage with ne developers."
          />
        </Grid>
        <Grid item lg={3} xs={12}>
          <ReviewCard
            AvatarSrc={Uruvelaa}
            AvatarTitle="Nitesh Kumar"
            AvatarSubheader="Uruvelaa solution pvt ltd"
            CardContentMain="It has been great to work with Ne-developers. Their enthusiasm, knowledge and drive were evident from the start. They really added value to the project and I look forward to working together again."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionReview;
