import React from "react";
import "./section-header.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hero from "../../../assets/hero-image.svg";
import BtnAnimated from "../component/button/button";
import Box from "@material-ui/core/Box";
import AnimatedBtn from "../../home/component/button/button";
import { Link } from "react-router-dom";

import Typewriter from "typewriter-effect";

class SectionHeader extends React.Component {
  render() {
    // var TxtRotate = function (el, toRotate, period) {
    //   this.toRotate = toRotate;
    //   this.el = el;
    //   this.loopNum = 0;
    //   this.period = parseInt(period, 10) || 2000;
    //   this.txt = "";
    //   this.tick();
    //   this.isDeleting = false;
    // };

    // TxtRotate.prototype.tick = function () {
    //   var i = this.loopNum % this.toRotate.length;
    //   var fullTxt = this.toRotate[i];

    //   if (this.isDeleting) {
    //     this.txt = fullTxt.substring(0, this.txt.length - 1);
    //   } else {
    //     this.txt = fullTxt.substring(0, this.txt.length + 1);
    //   }

    //   this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    //   var that = this;
    //   var delta = 300 - Math.random() * 100;

    //   if (this.isDeleting) {
    //     delta /= 2;
    //   }

    //   if (!this.isDeleting && this.txt === fullTxt) {
    //     delta = this.period;
    //     this.isDeleting = true;
    //   } else if (this.isDeleting && this.txt === "") {
    //     this.isDeleting = false;
    //     this.loopNum++;
    //     delta = 500;
    //   }

    //   setTimeout(function () {
    //     that.tick();
    //   }, delta);
    // };

    // window.onload = function () {
    //   var elements = document.getElementsByClassName("txt-rotate");
    //   for (var i = 0; i < elements.length; i++) {
    //     var toRotate = elements[i].getAttribute("data-rotate");
    //     var period = elements[i].getAttribute("data-period");
    //     if (toRotate) {
    //       new TxtRotate(elements[i], JSON.parse(toRotate), period);
    //     }
    //   }
    //   // INJECT CSS
    //   var css = document.createElement("style");
    //   css.type = "text/css";
    //   css.innerHTML = ".txt-rotate > .wrap { font-size:70px}"; //border-right: 0.08em solid #000000

    //   document.body.appendChild(css);
    // };

    return (
      <section className="home-hero">
        <Container maxWidth="xl" id="container-header" justify="center">
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="home-herotext__container"
            >
              <div
                className="home-hero__content"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h1>
                  We &nbsp;
                  <Typewriter
                    options={{
                      strings: ["code", "develop", "deploy", "design"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  &nbsp; apps & websites
                </h1>
                <span className="extra-text__header">
                  We deliver web and mobile app development services to global
                  businesses since 2017, with 100% project delivery success. Our
                  design-focused approach and project execution processes help
                  you to deliver the right solutions.
                </span>

                <Box>
                <Link to="about-us" className="btn-btn-all-services"  >
                <AnimatedBtn title="Learn about us" />
                </Link>
                </Box>
                
                 

              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div
                className="grid-header__container"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img src={Hero} alt="img" className="hero-image__header" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    );
  }
}

export default SectionHeader;
