import React from "react";
import "./section-review.css";
import Container from "@material-ui/core/Container";

const SectionReview = () => {
  return (
    <Container id="review-container">
      <div className="section-review__header">
        <h1>What customer say about us</h1>
        <p>
          We're an experienced team who you will love working with. <br /> But
          don't just take our word for it. See what some of our clients have to
          say.
        </p>
      </div>
    </Container>
  );
};

export default SectionReview;
