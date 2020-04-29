import styled from "styled-components";

export const Container = styled.div`
  header {
    height: 62px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    display: flex;
    float: initial;
    position: relativae;
    align-items: center;
    justify-content: center;
  }

  header h3 {
    margin-left: 15px;
    font-family: merienda;
    font-size: 30px;
  }
  @media (max-width: 650px) {
    header {
      justify-content: flex-end;
    }
  }
`;
