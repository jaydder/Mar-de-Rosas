import React, { Component } from 'react';

import { Container, Text, Cortina } from './style';

import Header from '../Header';

export default class Banner extends Component {
  render() {
    return (
      <Container>
        <Cortina>
          <Header />
          <Text>
            <h1> Mar de Rosas Decoração </h1>
            <h2 className="fadeIn"> & </h2>
            <h1> Organização de eventos </h1>

            <h3 className="fadeIn"> Tornando seus sonhos em realidade</h3>
          </Text>
        </Cortina>
      </Container>
    );
  }
}
