import React from "react";
import Grid from "@material-ui/core/Grid";
import "./FrontendSection.css";
import ReactIcon from "../../../../../assets/react-icon.svg";
import CssIcon from "../../../../../assets/css-3.svg";
import AngularIcon from "../../../../../assets/angular.svg";
import JavaScriptIcon from "../../../../../assets/javascript.svg";
import HtmlIcon from "../../../../../assets/html5.svg";
import WordpressIcon from "../../../../../assets/Wordpress.svg";
import SassIcon from "../../../../../assets/Sass.svg";
import VueIcon from "../../../../../assets/vuejs.svg";

const FrontendSection = () => {
  return (
    <Grid container direction="row" item md>
      <Grid>
        <div className="icon-tab__img">
          <img src={ReactIcon} alt="react" />
          <p>React</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={AngularIcon} alt="react" />
          <p>AngularJs</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={JavaScriptIcon} alt="react" />
          <p>javascript</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={HtmlIcon} alt="react" />
          <p>Html5</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={CssIcon} alt="react" />
          <p>CSS3</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={WordpressIcon} alt="react" />
          <p>Wordpress</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={VueIcon} alt="react" />
          <p>Vue js</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={SassIcon} alt="react" />
          <p>Sass</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default FrontendSection;
