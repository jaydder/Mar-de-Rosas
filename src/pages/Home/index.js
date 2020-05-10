import React from "react";

import Main from "../../components/Banner";
import Values from "../../components/Values";
import Contact from "../../components/Contact";
import Gastronomic from "../../components/Gastronomic";
import Identity from "../../components/Identity";
import Party from "../../components/Party";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Main />
      <Values />
      <Identity />
      <Gastronomic />
      <Party />
      <Contact />
    </Container>
  );
}
