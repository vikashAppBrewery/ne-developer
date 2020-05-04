import React from "react";
import "./card-services_home.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const CardServices = (props) => {
  return (
    <Grid item xs={6} sm={6} md={4}>
      <Box align="center">
        <div className="img-services_home">
          <img src={props.imgSrc} alt="services" />
        </div>
        <div className="title-services__details">
          <h4>{props.titleservices}</h4>
        </div>
      </Box>
    </Grid>
  );
};

export default CardServices;
