import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 550px;

  h1 {
    margin-bottom: 20px;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    border-radius: 12px;
  }
  section {
    display: flex;
  }
  div {
    width: 70%;
  }
  .center {
    margin-left: 30px;
    width: 100%;
  }

  .text {
    width: 28%;
    align-self: center;
    height: 50%;
    margin-right: 51px;
  }
  .button {
    width: 60%;
  }
`;

export const Page = styled.div`
  width: 100%;
`;
