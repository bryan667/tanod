import React from "react";
import styled from "styled-components";
import News from "./News";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <Wrapper>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-1.png")}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-2.png")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-3.png")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="news-cont">
        <News
          title="Check out my stash"
          date="May 4, 2020, 10:22:29 AM"
          content="I got a total of 10 Exolts in the delirium league. Exchanged 2 of them
        into a bunch of chaos and bought myself some endgame atkspd Axe, Gloves
        with 20% dmg, a ring with Vulnerability curse on Hit and Pure Physical
        Damage and Bleed. T16 maps are a walk in the park!"
        />
        <News
          title="Got a good feeling"
          date="May 1, 2020, 12:22:29 AM"
          content="This random mob just dropped dropped me an Exolt. I didn't wanna pick it up coz I already had so many Exolts I don't need them anymore. I don't want it to compensate my luck by not having a Mirror. WHAT I NEED IS A MIRROR. I got a good feeling that I'll get one today."
        />
        <News
          title="No Mirror yet"
          date="Apr 29, 2020, 11:10:29 PM"
          content="I was doing this random T16 Map -- 40% delirium, bunch of scarabs and chisels. This fucking delirium boss appeared and one shotted me out of nowhere. I'm down from 86% to 76% at level 91. Better drop me a Mirror today or I'll be totally pissed."
        />
      </div>
    </Wrapper>
  );
}

export default Images;

const Wrapper = styled.div`
  background: #000000;

  .section {
    background: #000000;
  }

  .news-cont {
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 30px;
  }
`;
