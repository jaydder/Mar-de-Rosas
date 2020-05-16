import React from "react";

import { Container } from "./styles";

export default function Identity() {
  return (
    <Container className='background'>
      <h1 className='title'> Quem Somos ?</h1>
      <div className='content'>
        <div className='text'>
          <section>
            <p> Um empresa com mais de 15 anos destinada a realizar sonhos!</p>
            <p>
              Contamos com uma equipe para tornar o seu evento com o seu jeito.
            </p>
            <p>Tudo feito com muito amor e profissionalismo.</p>
            <p>Empresa ganhadora o prêmio globo de ouro 2007.</p>
          </section>
        </div>
      </div>
    </Container>
  );
}
