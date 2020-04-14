import React from "react";

import Main from "../../components/Banner";
import Values from "../../components/Values";
import Contact from "../../components/Contact";
import Gastronomic from "../../components/Gastronomic";
import Kid from "../../components/Kid";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Main />
      <Values />
      <Gastronomic />
      <Kid />
      <Contact />
    </Container>
  );
}
