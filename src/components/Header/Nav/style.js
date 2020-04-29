import styled from "styled-components";

export const Container = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
  }

  ul li {
    font-size: 15px;
    padding: 20px;
  }

  ul li a {
    text-decoration: none;
    color: #fff;
    opacity: 0.5;
    font-family: Merienda, cursive;
    font-size: 18px;
    cursor: default;
  }

  ul li a:hover {
    opacity: 1;
    border-bottom: 1px solid black;
  }

  @media (max-width: 650px) {
    ul li {
      padding: 16px;
    }

    ul li a {
      font-size: 16px;
    }
  }
`;
