/*eslint-disable*/
import React from "react";
import styled from "styled-components";

// reactstrap components
import { Container, Button, ButtonGroup } from "reactstrap";
// core components

function IndexHeader() {
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
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">
              <b>BgyTanod</b>
            </h1>
            <h4>Farming Mirror Everyday</h4>
            <div className="shortcuts">
              <ButtonGroup>
                <Button
                  color="link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("swag-here").scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "start",
                    });
                  }}
                >
                  <i className="next-i now-ui-icons arrows-1_minimal-down" />
                  <span>My swag</span>
                </Button>
                <Button
                  color="link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("pics-here").scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "start",
                    });
                  }}
                >
                  <i className="next-i now-ui-icons arrows-1_minimal-down" />
                  <span>My pics</span>
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Container>
      </div>
    </StyledWrapper>
  );
}

export default IndexHeader;

const StyledWrapper = styled.div`
  .page-header .content-center {
    font-size: 100%;
    font-weight: bold;
    text-decoration: none;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #dfcf99;
  }

  h1 {
    margin-bottom: 10px;
  }

  h4 {
    margin-top: 0px;
  }

  .next-i {
    padding-right: 8px;
  }

  .shortcuts .btn.btn-link {
    color: #dfcf99;
    font-weight: 700;
  }
`;
