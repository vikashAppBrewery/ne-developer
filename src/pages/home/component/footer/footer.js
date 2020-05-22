import React from "react";
import "./footer.css";
import Facebook from "../../../../assets/facebook.svg";
import Twitter from "../../../../assets/twitter.svg";
import Youtube from "../../../../assets/youtube.svg";
import Instagram from "../../../../assets/instagram.svg";
import Whatsapp from "../../../../assets/whatsapp.svg";
// import Phone from "../../../../assets/phone.svg";
// import Mail from "../../../../assets/mail.svg";
// import Marker from "../../../../assets/map.svg";
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
      </div>

      <div className="footer-center">
        <p className="footer-company-name">NE DEVELOPERS @ 2020</p>
      </div>

      <div className="footer-right">
        <p className="footer-company-about"></p>

        <div className="footer-icons">
          <a
            href="https://www.facebook.com/nedevelopers"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Facebook} alt="fb-icon" />
          </a>
          <a
            href="https://twitter.com/nedevelopers"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Twitter} alt="twitter-icon" />
          </a>

          <a
            href="https://www.youtube.com/channel/UC7ZRzsMvFz1k9aiElHgTKFw?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="twitter-icon" />
          </a>

          <a
            href="https://www.instagram.com/nedevelopers/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Instagram} alt="instagram-icon" />
          </a>

          <a
            href="https://wa.me/919894178970"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Whatsapp} alt="whatsapp-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavigation;
