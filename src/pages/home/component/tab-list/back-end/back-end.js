import React from "react";
import Grid from "@material-ui/core/Grid";

import PythonIcon from "../../../../../assets/python.svg";
import NodeIcon from "../../../../../assets/node.svg";
import JavaIcon from "../../../../../assets/java.svg";
import PhpIcon from "../../../../../assets/php.svg";

const BackendSection = () => {
  return (
    <Grid container direction="row" item md>
      <Grid>
        <div className="icon-tab__img">
          <img src={PythonIcon} alt="react" />
          <p>Python</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={NodeIcon} alt="react" />
          <p>NodeJs</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={JavaIcon} alt="react" />
          <p>java</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={PhpIcon} alt="react" />
          <p>php</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default BackendSection;
