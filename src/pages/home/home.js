import React from "react";
import SectionHeader from "./sections/section-header";
import Header from "./component/nav-bar/nav-bar";
import SectionServices from "./sections/section-services";
import SectionAbout from "./sections/section-about";
import SectionDevelopment from "./sections/section-dev";
import SectionTablistTech from "./sections/section-tablist-tech";
import FooterNavigation from "./component/footer/footer";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SectionHeader />
        <SectionServices />
        <SectionAbout />
        <SectionDevelopment />
        <SectionTablistTech />
        <FooterNavigation />
      </div>
    );
  }
}

export default Home;
