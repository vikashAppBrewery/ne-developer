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
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Gallery</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
