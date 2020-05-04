import React from "react";
import styled from "styled-components";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("black-nav");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Wrapper>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://www.facebook.com/Awyisss"
              target="_blank"
              id="navbar-brand"
            >
              BgyTanod
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Level 92 Lacerate Gladiator
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end the-collapse"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="/" onClick={() => {}}>
                  <i className="now-ui-icons location_world"></i>
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about-me" onClick={() => {}}>
                  <i className="now-ui-icons users_single-02"></i>
                  <p>About me</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#wat"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("swag-here").scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "nearest",
                    });
                  }}
                >
                  <i className="now-ui-icons education_glasses"></i>
                  <p>Swag</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact-me" onClick={() => {}}>
                  <i className="now-ui-icons ui-2_chat-round"></i>
                  <p>Contact me</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/Awyisss"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
}

export default IndexNavbar;

const Wrapper = styled.div`
  .navbar a:not(.btn):not(.dropdown-item) {
    font-weight: 600;
    color: #dfcf99;
    text-shadow: black 0px 0px 5px;
  }

  .navbar-toggler {
    font-weight: 600;
    color: #dfcf99;
    text-shadow: black 0px 0px 5px;
  }

  .black-nav {
    background-color: #0c0b0b !important;
  }

  .the-collapse {
    background: #000000;
  }

  .the-collapse:before {
    @media screen and (max-width: 991px) {
      background: linear-gradient(#101010, #2c2c2c 80%);
      background-image: linear-gradient(rgb(4, 4, 4), rgb(44, 44, 44) 80%);
    }
  }
`;
