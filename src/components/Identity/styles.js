import styled from 'styled-components';
export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  width: 100%;
  height: 85vh;

  .content div {
    width: 50%;
    height: 80vh;
    display: flex;
    justify-content: center;
  }

  div img {
    width: 50%;
    height: 435px;
    margin-top: 15px;
    border-radius: 5px;
  }

  .text {
    width: 50%;
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;
    margin: 0 50px 0 0;
  }

  .text span {
    font-size: 20px;
    text-align: justify;
    font-family: 'Indie Flower', cursive;
  }

  .content {
    display: flex;
  }
`;
