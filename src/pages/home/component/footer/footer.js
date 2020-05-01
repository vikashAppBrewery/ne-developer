import React from "react";
import "./footer.css";
import Facebook from "../../../../assets/facebook.svg";
import Twitter from "../../../../assets/twitter.svg";
import Youtube from "../../../../assets/youtube.svg";
import Instagram from "../../../../assets/instagram.svg";
import Phone from "../../../../assets/phone.svg";
import Mail from "../../../../assets/mail.svg";
import Marker from "../../../../assets/map.svg";
import Logo from "../../../../assets/team-icon/ne-developers.svg";

const FooterNavigation = () => {
  return (
    <footer
      className="footer-distributed"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="footer-left">
        <img className="footer_img__logo" src={Logo} alt="props" />
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
        <p className="footer-company-about"></p>

        <div className="footer-icons">
          <a href="https://www.facebook.com/nedevelopers" target="_blank">
            <img src={Facebook} alt="fb-icon" />
          </a>
          <a href="https://twitter.com/nedevelopers" target="_blank">
            <img src={Twitter} alt="twitter-icon" />
          </a>

          <a
            href="https://www.youtube.com/channel/UC7ZRzsMvFz1k9aiElHgTKFw?"
            target="_blank"
          >
            <img src={Youtube} alt="twitter-icon" />
          </a>

          <a href="https://www.instagram.com/nedevelopers/" target="_blank">
            <img src={Instagram} alt="instagram-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavigation;
