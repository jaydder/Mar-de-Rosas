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
  .mobile {
    visibility: hidden;
  }

  ul li a:hover {
    opacity: 1;
    border-bottom: 1px solid black;
  }

  @media (max-width: 650px) {
    .wrapper {
    }
    nav {
      background: #262626;
      display: flex;
      justify-content: start;
    }
    nav a {
      text-decoration: none;
      font-size: 24px;
    }
    nav ul {
      list-style: none;
      margin: 0;
      padding-left: 0;
      margin-left: auto;
    }

    nav li {
      color: #fff;
      background: #262626;
      display: block;
      padding: 10px 25px;
      position: relative;
      text-decoration: none;
      transition-duration: 500ms;
    }
    nav li a {
      color: inherit;
    }
    nav li:hover,
    nav li:focus {
      background-color: #cc2a36;
      color: #fff;
      cursor: pointer;
    }
    nav ul li ul {
      position: absolute;
      transition: background-color 0.5s ease-in;
      margin-top: 10px;
      right: 0;
      display: none;
    }
    nav ul li:hover > ul,
    nav ul li:focus > ul,
    nav ul li ul:focus,
    nav ul li ul:hover {
      opacity: 1;
      display: block;
    }
    nav ul li ul li {
      clear: both;
      width: 100%;
      animation: animate 800ms forwards ease;
    }
    .mobile {
      visibility: visible;
    }
  }
`;
