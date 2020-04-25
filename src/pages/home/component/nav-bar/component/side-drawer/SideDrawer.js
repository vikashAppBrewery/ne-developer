import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
const SideDrawer = (props) => {
  let drawerClasses = "SideDrawer";
  if (props.show) {
    drawerClasses += " open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/all-services">Our Services</Link>
        </li>
        <li>
          <Link to="/About-us">About Us</Link>
        </li>
        <li>
          <a href="/">Gallery</a>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
