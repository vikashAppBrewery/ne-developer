import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import "./card-review.css";

import Comment from "../../../../assets/chat.svg";
export default function ReviewCard(props) {
  return (
    <Card id="review-card__card" elevation={1}>
      <CardHeader
        id="review-card-header"
        avatar={
          <Avatar
            className="avatar-circle"
            alt="Remy Sharp"
            src={props.AvatarSrc}
          />
        }
        title={props.AvatarTitle}
        subheader={props.AvatarSubheader}
      />
      <div className="avatar-icon__container">
        <img className="avatar-icon__review" src={Comment} alt="comment-icon" />
      </div>
      <CardContent>
        <p className="card-content_main">{props.CardContentMain}</p>
      </CardContent>
    </Card>
  );
}
