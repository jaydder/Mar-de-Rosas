import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40vh;

  h1 {
    font-size: 30px;
    margin-top: 10px;
  }

  div {
    width: 25%;
    height: 30vh;
    margin: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border-radius: 12px;
  }

  div span {
    font-size: 20px;
    text-align: justify;
    justify-content: center;
    margin-left: 15px;
  }

  div span + span {
    margin-top: 15px;
  }
`;
