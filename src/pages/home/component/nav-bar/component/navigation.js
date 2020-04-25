import React, { Component } from "react";
import DrawerToggleButton from "./side-drawer/DrawerToggleButton";
import "./navigation.css";

import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <header className="Navbar">
        <nav className="NavbarNavigation">
          <div className="NavbarToggleButton">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="NavbarLogo">
            <a href="/">NE DEVELOPER</a>
          </div>
          <div className="spacer" />
          <div className="NavbarNavigationsItems">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li class="dropdown">
                <Link class="v-mid" to="/all-services">
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
                </Link>

                <ul class="dropdown-content">
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
                    <a href="">Brand and Identity</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about-us">About-us</Link>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>

              <li>
                <Link to="/contact-us"> Contact-us </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
