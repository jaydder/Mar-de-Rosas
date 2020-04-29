import styled from "styled-components";
export const Container = styled.div`
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

  .text section {
    font-size: 20px;
    text-align: justify;
    font-family: "Libre Baskerville", serif;
  }

  section p + p {
    margin-top: 15px;
  }

  .content {
    display: flex;
  }
`;
