import React from "react";
import Grid from "@material-ui/core/Grid";
import "./mobile-dev.css";
import IosIcon from "../../../../../assets/ios.svg";
import AndroidIcon from "../../../../../assets/android-logo.svg";
import ReactIcon from "../../../../../assets/react-icon.svg";
import FlutterIcon from "../../../../../assets/flutter.svg";
import IonicIcon from "../../../../../assets/ionic.svg";
import SwiftIcon from "../../../../../assets/Swift.svg";
import KotlinIcon from "../../../../../assets/kotlin.svg";
import ObjectiveIcon from "../../../../../assets/objective-c.svg";

const MobileDeveloperSection = () => {
  return (
    <Grid container direction="row" item md>
      <Grid>
        <div className="icon-tab__img">
          <img src={IosIcon} alt="react" />
          <p>IOS</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={AndroidIcon} alt="react" />
          <p>aNDROID</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={ReactIcon} alt="react" />
          <p>react NATIVE</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={FlutterIcon} alt="react" />
          <p>Flutter</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={IonicIcon} alt="react" />
          <p>Ionic</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={SwiftIcon} alt="react" />
          <p>Swift</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={KotlinIcon} alt="react" />
          <p>kotlin</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={ObjectiveIcon} alt="react" />
          <p>Objective C</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default MobileDeveloperSection;
