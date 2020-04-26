import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 550px;

  h1 {
    margin-bottom: 20px;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    border-radius: 12px;
    width: 60%;
  }
  section {
    display: flex;
    flex-direction: row;
  }
  div {
    width: 50%;
  }
  .center {
    margin-left: 30px;
    width: 73vw;
  }

  .text {
    width: 28%;
    align-self: center;
    height: 50%;
    margin-left: 86px;
  }
`;

export const Page = styled.div`
  width: 100%;
`;
