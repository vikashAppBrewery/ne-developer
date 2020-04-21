import React from "react";
import "./card-services_home.css";
import Grid from "@material-ui/core/Grid";

const CardServices = (props) => {
  return (
    <Grid item xs={6} sm={3}>
      <a href="/" className="animate__1">
        <div className="img-services_home">
          <img src={props.imgSrc} alt="services" />
        </div>
        <div className="title-services__details">
          <h4>{props.titleservices}</h4>
        </div>
      </a>
    </Grid>
  );
};

export default CardServices;
