import React from "react";
import styled from "styled-components";

let News = ({ title, date, content }) => {
  return (
    <Wrapper>
      <h2 className="title" style={{ cursor: "pointer" }}>
        {title}
      </h2>
      <div className="date">{date}</div>
      <div className="content">{content}</div>
    </Wrapper>
  );
};

export default News;

const Wrapper = styled.div`
  margin: 13px 0px 0px;
  border: 1px solid;
  border-color: #141414;
  padding: 6px;
  background-color: #0c0b0b;
  position: relative;
  color: #a38d6d;
  max-width: 990px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  h2 {
    font-size: 1.3em;
    margin: 0px;
    padding: 0px;
    color: #cac2a8;
    font-weight: bold;
  }

  .title {
    margin-right: 190px;
    margin-bottom: 2px;
  }

  .date {
    position: absolute;
    top: 7px;
    right: 10px;
    color: #585858;
    font-style: italic;
    font-size: 90%;
  }

  .content {
    position: relative;
    text-align: left;
    margin: 0 auto;
    padding: 4px 0;
    z-index: 100;
  }

  .section {
    background: #000000;
  }
`;
