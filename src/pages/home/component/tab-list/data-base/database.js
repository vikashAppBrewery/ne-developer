import React from "react";
import Grid from "@material-ui/core/Grid";

import MongoIcon from "../../../../../assets/mongo.svg";
import MysqlIcon from "../../../../../assets/mysql.svg";
import FirebaseIcon from "../../../../../assets/firebase.svg";

const DatabaseSection = () => {
  return (
    <Grid container direction="row" item md>
      <Grid>
        <div className="icon-tab__img">
          <img src={MongoIcon} alt="react" />
          <p>MongoDb</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={MysqlIcon} alt="react" />
          <p>Mysql</p>
        </div>
      </Grid>
      <Grid>
        <div className="icon-tab__img">
          <img src={FirebaseIcon} alt="react" />
          <p>Firebase</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default DatabaseSection;
