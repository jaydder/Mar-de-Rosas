import React, { Component } from 'react'

import Nav from "../Nav";

import { Container } from "./style";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <header>
          <Nav />
        </header>
      </Container>
    )
  }
}
