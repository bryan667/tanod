import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import AboutMeHeader from "components/Headers/AboutMeHeader.js";
import AboutMeDetails from "components/About/AboutMeDetails.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function AboutMe() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <AboutMeHeader />
        <AboutMeDetails />
        <DarkFooter />
      </div>
    </>
  );
}

export default AboutMe;
