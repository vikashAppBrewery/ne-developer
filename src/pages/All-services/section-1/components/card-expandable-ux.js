import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import UxDev from "../../../../assets/services/ux-web.svg";
import "./card-expandable.css";
import Grid from "@material-ui/core/Grid";
import UxApp from "../../../../assets/services/ux2.svg";
import IosIcon from "../../../../assets/services/experience.svg";
import AndroidIcon from "../../../../assets/services/indesign.svg";
import ReactIcon from "../../../../assets/services/Sketch.svg";
import FlutterIcon from "../../../../assets/services/photoshop.svg";
import IonicIcon from "../../../../assets/services/illustrator.svg";

import AnimatedBtn from "../../../home/component/button/button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "80%",
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function ExpandableCard3() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} id="expandable___card" elevation={0}>
      <CardContent className="expandable-card__img">
        <Grid container>
          <Grid item xs={12} lg={6} md={6}>
            <h1>UI/UX Designing</h1>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="text__about__app"
            >
              “User Experience Design” is often used interchangeably with terms
              such as “User Interface Design” and “Usability”. However, while
              usability and user interface (UI) design are important aspects of
              UX design, they are subsets of it – UX design covers a vast array
              of other areas, too. A UX designer is concerned with the entire
              process of acquiring and integrating a product, including aspects
              of branding, design, usability and function. It is a story that
              begins before the device is even in the user’s hands.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <img src={UxDev} alt="" />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon id="expand-more__icon" />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <img src={UxApp} alt="icon-app-dev" />
            </Grid>
            <Grid item xs={12} lg={6} className="Mobile-app-development__img">
              <h3>UI/UX Design</h3>
              <Typography paragraph>
                UI/UX design is the catalyst behind the success of any web or
                mobile app. Ne developers web design and mobile app design
                agency with a knack of turning great ideas into meaningful
                interactions. Starting from conceptualization, information
                architecture, visual identity, and UX design; hire UI/UX
                designers from IndiaNIC for timely delivery of appealing
                websites and mobile apps resulting maximum user engagement.
              </Typography>
              <h3>What Technologies We Use</h3>
              <Grid container>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={IosIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={AndroidIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={ReactIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={FlutterIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={IonicIcon} alt="react" />
                  </div>
                </Grid>
              </Grid>
              <div className="service-points">
                <ul>
                  <li>Wireframes Designing</li>
                  <li>Strategic Design Consulting</li>
                  <li>High/Low fidelity Prototype</li>

                  <li>Mobile App Design</li>
                  <li>Responsive Web Design</li>
                  <li>Information Architecture</li>
                  <li>UX Analysis</li>
                  <li>UI Design</li>
                </ul>
              </div>
              <Box align="center">
                <AnimatedBtn title="Hire A Designer" />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
