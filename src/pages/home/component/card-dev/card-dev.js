import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./card-dev.css";

const CardDeveloperComponent = (props) => {
  return (
    <Card elevation={1} id="card-develop__card">
      <CardContent>
        <div className="Card-image__dev">
          <img src={props.imgSrc} alt="process" />
        </div>
        <div className="Card-content__dev">
          <h4>{props.header}</h4>
          <p>{props.title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDeveloperComponent;
