import React, { Component } from 'react'

import Nav from "./Nav";

import { Container } from "./style";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <header>
          <h3> Mar de rosas</h3>
          < Nav />
        </header>
      </Container>
    )
  }
}
