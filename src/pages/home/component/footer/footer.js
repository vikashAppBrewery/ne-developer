import React from "react";
import "./footer.css";
import Facebook from "../../../../assets/facebook.svg";
import Twitter from "../../../../assets/twitter.svg";
import LinkedIn from "../../../../assets/linkedin.svg";
import Instagram from "../../../../assets/instagram.svg";
import Phone from "../../../../assets/phone.svg";
import Mail from "../../../../assets/mail.svg";
import Marker from "../../../../assets/map.svg";

const FooterNavigation = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Company<span>logo</span>
        </h3>

        <p className="footer-links">
          <a href="./" className="link-1">
            Home
          </a>

          <a href="./">About Us</a>

          <a href="./">Services</a>

          <a href="./">Work</a>

          <a href="./">Contact Us</a>
        </p>

        <p className="footer-company-name">NE DEVELOPERS @ 2020</p>
      </div>

      <div className="footer-center">
        <div>
          <img src={Marker} alt="marker-icon" />
          <p>
            <span>Gangtok</span>sikkim, india
          </p>
        </div>

        <div>
          <img src={Phone} alt="phone-icon" />
          <p>+91 9789939112</p>
        </div>

        <div>
          <img src={Mail} alt="mail-icon" />
          <p>
            <a href="mailto:vikash99318@live.com">vikash99318@live.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          We deliver web and mobile app development services to global
          businesses since 2015, with 100% project delivery success. Hire the
          best programmers at affordable prices. Our design-focused approach and
          project execution processes help you to deliver the right solutions.
        </p>

        <div className="footer-icons">
          <a href="./">
            <img src={Facebook} alt="fb-icon" />
          </a>
          <a href="./">
            <img src={Twitter} alt="twitter-icon" />
          </a>
          <a href="./">
            <img src={LinkedIn} alt="Linkedin-icon" />
          </a>
          <a href="./">
            <img src={Instagram} alt="instagram-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavigation;
