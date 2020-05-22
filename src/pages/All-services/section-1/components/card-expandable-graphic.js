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
import Graphic from "../../../../assets/services/graphic-d.svg";
import LogoDesign from "../../../../assets/services/logo-design.svg";
import BuisnessCard from "../../../../assets/services/buisness-card.svg";
import StationaryCard from "../../../../assets/services/stationary.svg";
import LetterHead from "../../../../assets/services/letter-header.svg";
import LabelDesign from "../../../../assets/services/label-design.svg";
import Brochure from "../../../../assets/services/brochure.svg";
import CharacterDesign from "../../../../assets/services/character-design.svg";
import VideoPlayer from "../../../../assets/services/video-player.svg";
import VideoEditing from "../../../../assets/services/Video-Editing.svg";
import BillBoard from "../../../../assets/services/billboard-design.svg";
import "./card-expandable.css";
import Grid from "@material-ui/core/Grid";

import IosIcon from "../../../../assets/services/experience.svg";
import AndroidIcon from "../../../../assets/services/indesign.svg";
import ReactIcon from "../../../../assets/services/Sketch.svg";
import FlutterIcon from "../../../../assets/services/photoshop.svg";
import IonicIcon from "../../../../assets/services/illustrator.svg";
import Dimensions from "../../../../assets/services/Adobe-Dimension.svg";
import Premiere from "../../../../assets/services/Adobe-Premiere.svg";
import "./card-expandable-graphic.css";

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
            <img src={Graphic} alt="" />
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
            <div className="main-header__expandable">
              <h3>Our Graphic Design Services</h3>
            </div>
            <Grid container spacing={4}>
              <Grid item xs>
                <Card className="card__graphic__design" elevation={2}>
                  <img src={LogoDesign} alt="logo-design" />
                  <h3>Logo Design</h3>
                </Card>
              </Grid>
              <Grid item xs>
                <Card className="card__graphic__design" elevation={2}>
                  <img src={BuisnessCard} alt="logo-design" />
                  <h3>Buisness Card</h3>
                </Card>
              </Grid>
              <Grid item xs>
                <Card className="card__graphic__design" elevation={2}>
                  <img src={StationaryCard} alt="logo-design" />
                  <h3>Stationary Design</h3>
                </Card>
              </Grid>
              <Grid item xs>
                <Card className="card__graphic__design" elevation={2}>
                  <img src={LetterHead} alt="logo-design" />
                  <h3>Letter Head</h3>
                </Card>
              </Grid>
              <Grid item xs>
                <Card className="card__graphic__design" elevation={2}>
                  <img src={LabelDesign} alt="logo-design" />
                  <h3>Label Design</h3>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={4} className="row__second-graphic">
              <Grid item xs>
                <Card className="card__graphic__design" elevation={2}>
                  <img src={Brochure} alt="logo-design" />
                  <h3>Brochure Design</h3>
                </Card>
              </Grid>
              <Grid item xs>
                <Card className="card__graphic__design" elevation={2}>
                  <img src={CharacterDesign} alt="logo-design" />
                  <h3>character Design</h3>
                </Card>
              </Grid>

              <Grid item xs>
                <Card className="card__graphic__design" elevation={2}>
                  <img src={VideoPlayer} alt="logo-design" />
                  <h3>Ad Videos</h3>
                </Card>
              </Grid>
              <Grid item xs>
                <Card className="card__graphic__design" elevation={2}>
                  <img src={VideoEditing} alt="logo-design" />
                  <h3>Vieo Editing</h3>
                </Card>
              </Grid>
              <Grid item xs>
                <Card className="card__graphic__design" elevation={2}>
                  <img src={BillBoard} alt="logo-design" />
                  <h3>BillBoard Design</h3>
                </Card>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              className="Mobile-app-development__img"
              align="center"
            >
              <h3 className="graphic-design_____header">
                What Software We Use
              </h3>
              <Grid container>
                <Grid item xs>
                  <div className="icon-tab____collapse-graphic">
                    <img src={IosIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse-graphic">
                    <img src={AndroidIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse-graphic">
                    <img src={ReactIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse-graphic">
                    <img src={FlutterIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse-graphic">
                    <img src={IonicIcon} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse-graphic">
                    <img src={Dimensions} alt="react" />
                  </div>
                </Grid>
                <Grid item xs>
                  <div className="icon-tab____collapse-graphic">
                    <img src={Premiere} alt="react" />
                  </div>
                </Grid>
              </Grid>

              
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
