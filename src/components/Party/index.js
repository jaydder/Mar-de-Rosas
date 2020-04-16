import React from 'react';
import Slider from 'react-slick';
import { settings } from './settings.slider';
import { Container, Page } from './styles';

export default function Party() {
  return (
    <Container>
      <h1 className="title"> Eventos </h1>
      <div>
        <Slider {...settings}>
          <Page>
            <img
              src="https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=700&txt_altura=400&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador Imagem %234Devs&tamanho_fonte=10"
              alt=""
            />
          </Page>
          <Page>
            <img src="https://dummyimage.com/700x400/000/000.png" alt="" />
          </Page>
          <Page>
            <img src="https://dummyimage.com/700x400/000/fff.png" alt="" />
          </Page>
        </Slider>
      </div>
    </Container>
  );
}
