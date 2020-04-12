import React from 'react'

import Main from "../../components/Banner";
import Card from '../../components/Card'
import Contact from "../../components/Contact";
import Gastronomic from '../../components/Gastronomic'
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Main />
      <Card />
      <Gastronomic/>
      <Contact />
    </Container>
  )
}
