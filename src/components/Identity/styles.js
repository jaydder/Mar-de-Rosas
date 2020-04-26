import styled from "styled-components";
export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");
  width: 100%;
  height: 100vh;

  .content div {
    width: 50%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  div img {
    width: 50%;
    height: 90%;
    margin-top: 35px;
    border-radius: 5px;
  }

  .text {
    width: 50%;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0 50px 0 0;
  }

  .text span {
    font-size: 30px;
    text-align: justify;
    font-family: "Indie Flower", cursive;
  }

  .content {
    display: flex;
  }
`;
