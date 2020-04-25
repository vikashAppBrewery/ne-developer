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
        <li class="dropdown" aria-haspopup="true">
          <a class="v-mid" href="">
            Services
            <svg
              class="icon v-mid"
              width="14"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
            </svg>
          </a>

          <ul class="dropdown-content" aria-label="submenu">
            <li>
              <a href="">App Development</a>
            </li>
            <li>
              <a href="">Web Development</a>
            </li>
            <li>
              <a href="">UI/UX development</a>
            </li>
            <li>
              <a href="">Print and Event</a>
            </li>
            <li>
              <a href="">Startup Development</a>
            </li>
            <li>
              <a href="">Brand And Identity</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Gallery</a>
        </li>
        <li>
          <Link to="/About-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
