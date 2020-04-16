import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 550px;
  background: rgb(226, 195, 232);
  background: linear-gradient(
    0deg,
    rgba(226, 195, 232, 1) 0%,
    rgba(238, 185, 255, 1) 100%
  );
  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  div {
    width: 80%;
    display: flex;
    justify-content: start;
  }
  .center {
    margin-left: 30px;
  }
`;

export const Page = styled.div`
  width: 100%;
`;
