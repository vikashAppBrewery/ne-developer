import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
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
    margin: "0 auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function ExpandableCard4() {
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
            <img src={UxDev} alt="" />
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <h1>Graphic Design</h1>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="text__about__app"
            >
              We create visual concepts, using computer software or by hand, to
              communicate ideas that inspire, inform, and captivate consumers.
              We develop the overall layout and production design for
              applications such as advertisements, brochures, magazines, and
              reports.
              <h3>Our approach</h3>
              <ul>
                <li>
                  Meet with clients or the art director to determine the scope
                  of a project
                </li>
                <li>
                  Create visual elements such as logos, original images, and
                  illustrations to help deliver a message
                </li>
                <li>Present design concepts to clients or art directors</li>
                <li>
                  Incorporate changes recommended by clients or art directors
                  into final designs
                </li>
                <li>
                  Review designs for errors before printing or publishing them
                </li>
              </ul>
            </Typography>
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
          <ArrowDropDownCircleIcon id="expand-more__icon" />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <img src={UxApp} alt="icon-app-dev" />
            </Grid>
            <Grid item xs={12} lg={6} className="Mobile-app-development__img">
              <h3>Graphic Design</h3>
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
