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
import WebDev from "../../../../assets/services/web-development.svg";
import "./card-expandable-web.css";
import Grid from "@material-ui/core/Grid";
import WebApp from "../../../../assets/services/web-dev2.svg";
import ReactIcon from "../../../../assets/react-icon.svg";
// import CssIcon from "../../../../assets//css-3.svg";
import AngularIcon from "../../../../assets/angular.svg";
import JavaScriptIcon from "../../../../assets/javascript.svg";
// import HtmlIcon from "../../../../assets/html5.svg";
import WordpressIcon from "../../../../assets/Wordpress.svg";
import PythonIcon from "../../../../assets/python.svg";
import NodeIcon from "../../../../assets/node.svg";
import JavaIcon from "../../../../assets/java.svg";
import PhpIcon from "../../../../assets/php.svg";
import VueIcon from "../../../../assets/vuejs.svg";


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

export default function ExpandableCard2() {
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
            <img src={WebDev} alt="" />
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <h1>Web Development</h1>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="text__about__app"
            >
              Web Logics require one thing, and that is functionality. Without
              it most web sites development are useless. We offer a full range
              of web solutions and web development for businesses, as well as
              individuals. Our team of professionals with proven experience in
              the field of web development can provide high quality,
              cost-effectiveness complete web development solutions including
              complex database integrated web sites development, e-commerce
              portals, intranet web development and web site maintenance. We can
              develop advance systems that can handle mass amounts of data and
              transactions. It doesn't matter how small or big your company is
              we have solutions for any size of web site development.
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
              <img src={WebApp} alt="icon-app-dev" />
            </Grid>
            <Grid item xs={12} lg={6} className="Mobile-app-development__img">
              <h3>Web Development</h3>
              <Typography paragraph className="paragraph__about__webdev">
                We have the right combination of creative and technical
                expertise to provide a full spectrum of web site development,
                custom web site programming, eCommerce Web Development solutions
                and to make your vision a reality. We help our clients to
                envision and launch web site development solutions that create
                measurable value and result in a positive. We pride ourselves on
                our wide ranging technical expertise which helps us to foster
                long-term relationships with our clients.
              </Typography>
              <h3>What Technologies We Use</h3>
              <Grid container>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={ReactIcon} alt="react" />
                  </div>
                </Grid>
                {/* <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={CssIcon} alt="react" />
                  </div>
                </Grid> */}
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={AngularIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={JavaScriptIcon} alt="react" />
                  </div>
                </Grid>
                {/* <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={HtmlIcon} alt="react" />
                  </div>
                </Grid> */}
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={WordpressIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={VueIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={PythonIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={NodeIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={JavaIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse">
                    <img src={PhpIcon} alt="react" />
                  </div>
                </Grid>
              </Grid>
              <div className="service-points">
                <ul>
                  <li>Custom Website Design</li>
                  <li>Web CMS Development</li>
                  <li>Web Portal Development</li>

                  <li>eCommerce Website Development</li>
                  <li>Enterprise Web App Development</li>
                  <li>Custom CMS Web Development</li>
                  <li>Authentication Services</li>
                  <li>API/Webservices</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
