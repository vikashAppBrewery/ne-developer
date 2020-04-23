import React, { Component } from "react";
import "./nav-bar.css";
import Navbar from "./component/navigation";
import SideDrawer from "./component/side-drawer/SideDrawer";
import BackDrop from "./component/BackDrop";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
    console.log("[BackDropClickHandler] was clicked!", this.state.sideDrawer);
  };
  render() {
    let backDrop;
    if (this.state.SideDrawerOpen) {
      backDrop = <BackDrop close={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {backDrop}
      </div>
    );
  }
}

export default Header;
