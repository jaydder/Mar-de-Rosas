import styled from "styled-components";
export const Container = styled.div`
  height: 90vh;
  .card-father {
    width: 100%;
    height: 57vh;
    display: flex;
    flex-direction: column;
  }
  .card {
    width: 75%;
    height: 53%;
    margin: auto;
    box-shadow: none;
    background: #ffffff24;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 22px;
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
    margin-bottom: 14px;
  }

  .card p {
    height: 10%;
    max-height: 60px;
    text-align: justify;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: center;
  }

  .card h3 {
    display: flex;
    padding: 0 30px;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
  }
`;
