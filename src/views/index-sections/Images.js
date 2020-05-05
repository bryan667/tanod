import React from "react";
import styled from "styled-components";
import News from "./News";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <Wrapper>
      <div className="section section-images" id="swag-here">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-1.jpg")}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-2.jpg")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-3.jpg")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="news-cont">
        <News
          title="Just Hit 93 Bois"
          date="May 5, 2020, 10:00:00 PM"
          content="Just hit 93 today. I bet Atlas bosses are peeing their pants right now coz tis the season when I start hunting them. (Looking at you Sirus) Better drop me a Mirror or I'll keep coming back to haunt your dreams."
        />
        <News
          title="Check out my stash"
          date="May 4, 2020, 10:22:29 AM"
          content="Got a total of 10 Exolts in the entire delirium league. Exchanged 2 of them
        into a bunch of chaos and bought myself some endgame atkspd Axe, Gloves
        with 20% dmg, a ring with Vulnerability curse on Hit and Pure Physical
        Damage and Bleed. T16 maps are a walk in the park."
        />
        <News
          title="Got a good feeling"
          date="May 1, 2020, 12:22:29 AM"
          content="This random mob just dropped me an Exolt. Didn't wanna pick it up coz I already had so many Exolts I don't need them anymore. Don't want RNG to waste my luck on a lousy Exalt. I NEED MIRROR. I got a good feeling I'll get one today."
        />
        <News
          title="No Mirror yet"
          date="Apr 29, 2020, 11:10:29 PM"
          content="I was doing this random T16 Map -- 40% delirium, bunch of scarabs and chisels. This fucking delirium boss appeared out of nowhere and one shotted me. I'm down from 86% to 76% at level 91. Better drop me a Mirror today or I'll be totally pissed."
        />
        <News
          title="Sirus, Awakener of Worlds"
          date="Apr 28, 2020, 9:10:29 PM"
          content={`After hitting 91, I decided to hunt Sirus who was waiting at the center of the  Atlas. Killed him on my first try, didn't even break a sweat. So much for the "Awakener of worlds", I almost fell asleep on our fight.`}
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
