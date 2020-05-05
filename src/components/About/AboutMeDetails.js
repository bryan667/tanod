/*eslint-disable*/
import React from "react";
import styled from "styled-components";
import News from "../../views/index-sections/News";

const Bestie = require("assets/img/bestie.jpg");

function AboutMeDetails() {
  return (
    <StyledWrapper>
      <div className="container">
        <News
          title="I'm a Level 93 Lacerate Gladiator"
          content={
            <>
              <div>
                <div>My deadliest skills:</div>
                <div>Lacerate with Impale</div>
                <div>Blood and Sand, Flesh and Stone</div>
                <div>Vulnerability on Hit</div>
                <div>Blood Rage</div>
              </div>
              <br />
              <div>
                My stats in the pic are outdated since I bought a bunch of
                stronger rings and jewels recently.
              </div>
              <div>
                If I catch you outside without any quarantine pass, you are
                dead.
              </div>
              <br />
              <div>
                <span> If u wanna check my build further, this is my POB:</span>
                &nbsp;
                <a
                  href="https://pastebin.com/NzgZSmhV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pastebin.com/NzgZSmhV
                </a>
              </div>
            </>
          }
        />
        <News
          maxWidth={"450px"}
          content={
            <div className="bestie-section">
              <img src={Bestie} alt="best" className="bestie" />
              <div>
                Also my best pal, Alma. She's nice. Sometimes crazy, sometimes
                weird, but she's cool.
              </div>
            </div>
          }
        />
      </div>
    </StyledWrapper>
  );
}

export default AboutMeDetails;

const StyledWrapper = styled.div`
  background-color: #000000;

  .container {
    color: #a19362;
    margin: auto;
    max-width: 990px;
    padding: 20px;
  }

  .bestie {
    max-height: 300px;
    padding-right: 15px;
  }

  .bestie-section {
    display: flex;
    max-width: 400px;
    margin: 20px auto;
  }
`;
