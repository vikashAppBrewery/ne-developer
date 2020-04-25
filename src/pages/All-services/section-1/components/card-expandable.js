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
import MobDev from "../../../../assets/app-dev.svg";
import "./card-expandable.css";
import Grid from "@material-ui/core/Grid";
import MobileApp from "../../../../assets/mobile-app.svg";
import IosIcon from "../../../../assets/ios.svg";
import AndroidIcon from "../../../../assets/android-logo.svg";
import ReactIcon from "../../../../assets/react-icon.svg";
import FlutterIcon from "../../../../assets/flutter.svg";
import IonicIcon from "../../../../assets/ionic.svg";
import SwiftIcon from "../../../../assets/Swift.svg";
import KotlinIcon from "../../../../assets/kotlin.svg";
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

export default function ExpandableCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} id="expandable___card" elevation={0}>
      <CardContent className="expandable-card__img">
        <img src={MobDev} alt="" />
        <h1>Mobile App Development</h1>
        <Typography variant="body2" color="textSecondary" component="p">
          As you know that there are around more than 5 billion people who are
          using the mobile phones daily and its has been analyzed that over 1
          billion people mostly preferred the accessing of website through
          mobile phones because it is reliable for the viewers to view the
          website instantly anywhere in the world at any moment. While these
          numbers are astounding, the mobile web experience is yet to live up to
          its full potential as compared to the traditional web experience. We
          should have to be focused over mobile web browsing techniques also
          because then only anybody can visit our website with full comfort.
        </Typography>
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
              <img src={MobileApp} alt="icon-app-dev" />
            </Grid>
            <Grid item xs={12} lg={6} className="Mobile-app-development__img">
              <h3>Mobile Apps Development</h3>
              <Typography paragraph>
                From B2B or B2E apps for enterprises, small businesses, and
                startups, we have a proven track record of offering high-impact,
                result driven and engaging mobile application development
                services. NE DEVELOPER is a top mobile app development company
                that is renowned for delivering native Android app development,
                native iOS app development, hybrid and cross-platform app
                development services to build next-gen mobile applications using
                the latest technology stack.
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
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={SwiftIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={KotlinIcon} alt="react" />
                  </div>
                </Grid>
              </Grid>
              <div className="service-points">
                <ul>
                  <li>Native iOS App Development</li>
                  <li>Native Android App Development</li>
                  <li>Cross-platform App Development</li>

                  <li>Hybrid App Development</li>
                  <li>Wearable App Development</li>
                  <li>React Native App Development</li>
                  <li>Xamarin App Development</li>
                  <li>Flutter App Development</li>
                </ul>
              </div>
              <Box align="center">
                <AnimatedBtn title="Hire A Developer" />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
