/*eslint-disable*/
import React from "react";
import styled from "styled-components";

function AboutMeHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <StyledWrapper>
      <div
        className="page-header clear-filter"
        style={{
          background:
            "linear-gradient(0deg, rgba(44, 44, 44, 0.2), rgba(0, 0, 0, 0.6))",
        }}
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="the-stats-container">
          <img alt="..." src={require("assets/img/profile-stats.jpg")}></img>
        </div>
      </div>
    </StyledWrapper>
  );
}

export default AboutMeHeader;

const StyledWrapper = styled.div`
  height: 450px;

  .page-header {
    height: 450px;
    min-height: 450px;
  }

  .the-stats-container {
    margin: auto;
    text-align: center;
    margin-top: 110px;
  }

  .page-header .content-center {
    font-size: 100%;
    font-weight: bold;
    text-decoration: none;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #dfcf99;
  }
`;
