import React, { Component } from 'react';
import { Container } from "./style";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <Container>
        <ul>
          <li><Link to="/"> Home</Link> </li>
          <li><Link to="/products"> Produtos </Link> </li>
          <li><a href=" "> Contato </a></li>
          <li><a href=" "> Suporte </a></li>
          <li><a href=" "> Quem Somos </a></li>
          <li><a href=" "> Montagem de Placas </a></li>
        </ul>
      </Container>
    );
  }
}

export default Nav;
