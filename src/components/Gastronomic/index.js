import React from "react";

import candy1 from "../../images/candy-1.png";
import candy2 from "../../images/candy-2.png";
import candy3 from "../../images/candy-3.png";

import savory1 from "../../images/savory-1.png";
import savory2 from "../../images/savory-2.png";
import savory3 from "../../images/savory-3.png";

import { Container } from "./styles";

export default function Gastronomic() {
  return (
    <Container className='gastronomic background-inverted'>
      <h1 className='title'> Gastronomia </h1>
      <div className='container'>
        <div className='box'>
          <div className='imgBox'>
            <img src={candy1} alt='' />
          </div>
          <div className='details'>
            <div className='content'>
              <h2> Docinhos </h2>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={candy2} alt='' />
          </div>
          <div className='details'>
            <div className='content'>
              <h2> Bolos </h2>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={candy3} alt='' />
          </div>
          <div className='details'>
            <div className='content'>
              <h2> Guloseimas </h2>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='imgBox'>
            <img src={savory1} alt='' />
          </div>
          <div className='details'>
            <div className='content'>
              <h2> Salgadinhos </h2>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={savory2} alt='' />
          </div>
          <div className='details'>
            <div className='content'>
              <h2> Buffets</h2>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='imgBox'>
            <img src={savory3} alt='' />
          </div>
          <div className='details'>
            <div className='content'>
              <h2> Churrascos </h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
