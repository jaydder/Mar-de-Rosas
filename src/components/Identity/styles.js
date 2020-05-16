import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: auto;

  .content div {
    width: 100%;
    height: 67vh;
    margin: auto;
  }

  .text {
    width: 100%;
    height: 67vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 50px 0 0;
  }

  .text section {
    font-size: 22px;
    margin: auto;
    text-align: center;
    font-family: "Libre Baskerville", serif;
  }

  section p + p {
    margin-top: 15px;
  }

  .content {
    display: flex;
  }
`;
