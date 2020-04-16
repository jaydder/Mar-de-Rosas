import React, { Component } from 'react';
import { Container } from './style';

import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <Container>
        <ul>
          <li>
            <Link to=""> Home</Link>
          </li>
          <li>
            <Link to=""> Valores </Link>
          </li>
          <li>
            <a href=" "> Quem Somos </a>
          </li>
          <li>
            <a href=" "> Gastronomia </a>
          </li>
          <li>
            <a href=" "> Eventos </a>
          </li>
          <li>
            <a href=" "> Contato </a>
          </li>
        </ul>
      </Container>
    );
  }
}

export default Nav;
