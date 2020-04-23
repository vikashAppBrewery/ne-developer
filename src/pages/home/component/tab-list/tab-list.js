import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import blue from "@material-ui/core/colors/blue";
import FrontendSection from "./Front-end/FrontendSection";
import "./tab-list.css";
import MobileDeveloperSection from "./Mobile-dev/mobile-dev";
import BackendSection from "./back-end/back-end";
import DatabaseSection from "./data-base/database";
import AOS from "aos";

AOS.init();

const backgroundColorAppBar = blue[0];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: backgroundColorAppBar,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} data-aos="fade-down" data-aos-duration="1000">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        centered
      >
        <Tab label="Front-End" {...a11yProps(0)} />
        <Tab label="Mobile-Development" {...a11yProps(1)} />
        <Tab label="Back-End" {...a11yProps(2)} />
        <Tab label="Database" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FrontendSection />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MobileDeveloperSection />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BackendSection />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DatabaseSection />
      </TabPanel>
    </div>
  );
}
