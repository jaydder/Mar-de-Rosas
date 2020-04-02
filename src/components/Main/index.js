import React, {Component} from 'react';

import { Container } from "./style";

export  default class Main extends Component {
  render() {
    return (
      <Container type={this.props.type}>
      </Container>

    );
  }
}
