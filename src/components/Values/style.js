import styled from 'styled-components';
export const Container = styled.div`
  .card-father {
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: row;
  }
  .card {
    width: 30%;
    margin: auto;
    box-shadow: none;
  }

  .card div {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: -40px;
  }

  .card p {
    height: 10%;
    max-height: 60px;
    text-align: justify;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .card h3 {
    display: flex;
    padding: 0 30px;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
  }
`;
