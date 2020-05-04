/*eslint-disable*/
import React from "react";
import styled from "styled-components";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <Wrapper className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a href="https://www.facebook.com/Awyisss" target="_blank">
                Awyisss
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/groups/the.brogrammers/"
                target="_blank"
              >
                Brogrammers
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()} | All Rights Reserved
        </div>
      </Container>
    </Wrapper>
  );
}

export default DarkFooter;

const Wrapper = styled.footer`
  background-color: #0c0b0b;

  a {
    color: #dfcf99 !important;
  }

  .copyright {
    color: #dfcf99;
  }
`;
