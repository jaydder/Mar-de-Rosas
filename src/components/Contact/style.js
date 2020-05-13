import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  h1 {
  }

  section {
    display: flex;
    justify-content: space-between;
  }
  .text {
    width: 100%;
    height: 30vh;
    margin: 25px 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border-radius: 12px;
    font-size: 20px;
    text-align: justify;
    justify-content: center;
    margin-left: 15px;
  }
  div span + span {
    margin-top: 15px;
  }
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  a:hover {
    background: linear-gradient(
      to right,
      rgba(226, 195, 232, 1) 0%,
      rgba(238, 185, 255, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font: {
      family: $font;
    }
    text-shadow: 0px 0px 1px black;
  }
`;
