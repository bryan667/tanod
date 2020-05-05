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
    src:
      "https://lh3.googleusercontent.com/XvxO2LaHvL6W9_dRuiU6gbbU73NCHZ8_I-glI4AoY8TE5fdiwb_YaEGRmvcLveAOq8DQhGWx-mpeV3DjxjODo6RWoW9uZz78i-sxSW7b0xCRKOzFTBvXrog4MBjdrBE_eDNr7Uk7nQ=w2400",
    altText: "Jun, you have fooled me",
    caption: "Jun, you have fooled me",
  },
  {
    src:
      "https://lh3.googleusercontent.com/kU81jJFRhpfhX0mGAs2hV7kCmGLKOVm2Ij4z1cKWTmB5ILfhHwQsIoFMNhJyxe6AlMNGYQIIL5cZWQC_WS69KWsHP_dZdMIqZ3C7NnPnuZjrRuEkqRr_OjseE7Z1QhohrqU-fE4h7g=w2400",
    altText: "Chillin with ma homie, Zana",
    caption: "Chillin with ma homie, Zana",
  },
  {
    src:
      "https://lh3.googleusercontent.com/xwNiqcNYvIjJH96fADsJRFWIta9ILfcH85xhvrulVgLzQfSiq7BpRQx6dPFtlxr6wIhA4oovUmEha-0_dzKSczkzydYFEr7xtMc96CHUDji6WSpKFat4OctDeHUgph9pdC9k-vzeiQ=w2400",
    altText: "My best pal, Alma",
    caption: "My best pal, Alma",
  },
  {
    src:
      "https://lh3.googleusercontent.com/5U146oVlVzsqxhdN4pUNPX0nyuFt5tYJ3i3kgef852z630gX_Nl13N-x5HSHN5w-mjeFU16eQkMqj5XydLWgOp0QUhZQNUOQlFygqdxWdu1HBr4NT7sOIPcjyK6QYf_9LrPmVATsHg=w2400",
    altText: "Swag",
    caption: "Swag",
  },
  {
    src:
      "https://lh3.googleusercontent.com/BvBXLRMPNsU8dMiX_iuE7JsT7mI2Q1hG6X1vHEqeJjHHodNOxvBpfZrOt8rwsoayubvdOgScX1KxKvV-AC7PP_3hQwLTk-SYWp_EbmamSltNtjzzbm-D-oC5GPC_rgTfWv8BUa3DJg=w2400",
    altText: "Boys' Night Out",
    caption: "Boys' Night Out",
  },
  {
    src:
      "https://lh3.googleusercontent.com/xS0TygeJ-bG1w0TeqZW5BKDjOKuoIClPrhrhWcDwfMWL8uPShfdUs-yj31k50Lp1zcSpY41YtCPVB6g1u4Zo9j2MwIAV7ShQrwfNidk0P0lOQ24egyL3VXXTaWuMtkQxHjSpbK8sfg=w2400",
    altText: "Me & the squad preppin for the hunt",
    caption: "Me & the squad preppin for the hunt",
  },
  {
    src:
      "https://lh3.googleusercontent.com/1UL9YAieUMJJbfq6h1T4jy2Kqa4kgNd1dIeRqrmij5Jci8kQGU5ytvt0uw-3ORBITezUq-hFy5ZZwvgEX7tnkRussyY-CdGzNPWAoQy5-k3INpfdl9AK1bff---SdoCCPXmD25E1ww=w2400",
    altText: "These Fucbois",
    caption: "These Fucbois",
  },
  {
    src:
      "https://lh3.googleusercontent.com/Sgp46YsUtLjODlHBNOKm4GoDRJ13Drv4Hi4GkQzrcaFyFs6x0QUryqJeWXxL0nrkGxITgEKnfmDqz6-OyBJpJHlN-DmFQwHCcYIjzw6LJODLnnc6W0cRGeVre4gMdD8v7jG6B7XM5w=w2400",
    altText: "Hate it when this happens",
    caption: "Hate it when this happens",
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
    <Wrapper id="pics-here">
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
                      <div className="carousel-caption d-md-block">
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

    @media (max-width: 450px) {
      font-size: 12px;
    }
  }

  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 600px;

    @media (max-width: 450px) {
      height: 500px;
    }
  }
`;
