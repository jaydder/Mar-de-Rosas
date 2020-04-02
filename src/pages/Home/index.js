import React from 'react'

import Main from "../../components/Main";
import Card from '../../components/Card'
import Contact from "../../components/Contact";
import Descrition from "../../components/Descrition";
import Header from "../../components/Header"

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Main type="home_background"/>
      <Card />
      <Contact />
      <Descrition />
    </Container>
  )
}
