import styled from "styled-components";

export const Container = styled.div``;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: merienda;
  justify-content: center;
  padding: 210px 100px;
  h3 {
    font-size: 1rem;
  }
  h1 {
    font-size: 40px;
    margin-bottom: 12px;
  }

  @media (max-width: 650px) {
    padding: 121px 100px;

    h1 {
      font-size: 34px;
      text-align: center;
    }
    h3 {
      text-align: center;
    }
  }
`;

export const Cortina = styled.div`
  background: black;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
`;
