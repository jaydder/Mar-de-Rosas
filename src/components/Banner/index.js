import React, { Component } from "react";

import { Container, Text, Cortina } from "./style";

import Header from "../Header";

export default class Banner extends Component {
  render() {
    return (
      <Container className='main'>
        <Cortina>
          <Header />
          <Text className='animate__animated animate__fadeInDown'>
            <h1>Mar de Rosas Decoração</h1>
            <h3>&</h3>
            <h1>Organização de eventos</h1>
            <h3> Tornando seus sonhos em realidade</h3>
          </Text>
        </Cortina>
      </Container>
    );
  }
}
