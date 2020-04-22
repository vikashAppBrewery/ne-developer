import React from "react";
import "./home.css";
import SectionHeader from "./sections/section-header";
import Header from "./component/nav-bar/nav-bar";
import SectionServices from "./sections/section-services";
import SectionAbout from "./sections/section-about";
import SectionDevelopment from "./sections/section-dev";
import SectionTablistTech from "./sections/section-tablist-tech";
import ProjectSection from "./sections/section-project";
import FooterNavigation from "./component/footer/footer";
class Home extends React.Component {
  render() {
    return (
      <div className="home_container">
        <Header />
        <SectionHeader />
        <SectionServices />
        <SectionAbout />
        <SectionDevelopment />
        <SectionTablistTech />
        <ProjectSection />
        <FooterNavigation />
      </div>
    );
  }
}

export default Home;
