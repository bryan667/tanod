import React from "react";
import styled from "styled-components";
import Dot from "./Dot";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Jun, you have fooled me",
    caption: "Jun, you have fooled me",
  },
  {
    src: require("assets/img/bg2.jpg"),
    altText: "Chillin with ma homie, Zana",
    caption: "Chillin with ma homie, Zana",
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "My dear friend, Alma",
    caption: "My dear friend, Alma",
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Swag",
    caption: "Swag",
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <Wrapper>
      <div className="section" id="carousel">
        <Container>
          <div className="title">
            <h2>
              <Dot />
              Pics
            </h2>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <div
                        className="center"
                        style={{
                          background: "url(" + item.src + ") no-repeat center",
                          backgroundSize: "contain",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#wat"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#wat"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
}

export default CarouselSection;

const Wrapper = styled.div`
  background-color: #000000;

  .title {
    text-align: center;
  }

  h2 {
    font-family: "FontinSmallCaps", Verdana, Arial, Helvetica, sans-serif;
    color: #cac2a8;
  }

  .section {
    background-color: #000000;
  }

  .carousel-caption {
    color: #ffefba;
    text-shadow: black 0px 0px 5px;
  }

  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 600px;
  }
`;
