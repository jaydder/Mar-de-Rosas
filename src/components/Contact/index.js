import React from 'react';

import { Container } from './style';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function index() {
  return (
    <Container>
      <h1 className="title"> Contatos </h1>
      <hr />
      <div>
        <span>
          <FaWhatsapp size={18} /> (51) 98610-8838
        </span>
        <span>
          <MdEmail size={18} /> saionaraguine1@gmail.com
        </span>
        <span>
          <FaFacebookSquare size={18} /> Saionara Guine
        </span>
        <span>
          <FaMapMarkerAlt />
          Rua João Dias - 103
        </span>
      </div>
    </Container>
  );
}
