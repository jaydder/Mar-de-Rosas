import React from "react";

import { Container } from "./style";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function index() {
  return (
    <Container className="contact">
      <h1 className="title"> Contatos </h1>
      <section>
        <div>
          <span>
            <FaWhatsapp size={20} title="WhatsApp" />
            <a href=" "> (51) 98610-8838 </a>
          </span>
          <span>
            <MdEmail size={18} title="Email" />
            <a href=" "> saionaraguine1@gmail.com </a>
          </span>
          <span>
            <FaFacebookSquare size={18} title="Facebook" />
            <a href="https://www.facebook.com/marderosasdecoracaoeorganizacaodeeventos/">
              Mar de Rosas
            </a>
          </span>
          <span>
            <FaMapMarkerAlt title="Localização" />
            <a href="https://www.google.com.br/maps/@-29.8704742,-50.9817385,3a,75y,16.45h,77.28t/data=!3m6!1e1!3m4!1sr--T9EAou-Fkdbh_qPFMnQ!2e0!7i16384!8i8192">
              Gravataí/RS - pda. 83
              <p> Rua João Dias - 103</p>
            </a>
          </span>
        </div>
        <div>
          <h1> test</h1>
        </div>
        <div>
          <h3> test </h3>
        </div>
      </section>
    </Container>
  );
}
