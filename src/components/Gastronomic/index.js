import React from 'react';

import crush1 from '../../images/crush-1.png';
import crush2 from '../../images/crush-2.png';
import crush3 from '../../images/crush-3.png';

import savory1 from '../../images/savory-1.png';
import savory2 from '../../images/savory-2.png';
import savory3 from '../../images/savory-3.png';

import { Container } from './styles';

export default function Gastronomic() {
  return (
    <Container>
      <h1 className="title"> Gastronomia </h1>
      <div className="container">
        <div className="box">
          <div className="imgBox">
            <img src={crush1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2> What is Lorem </h2>
              <p>Loem upsnddskjnkcnwekljdcnskc dasfruiehfnkdsjcskdnslkdfnfdf</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <img src={crush2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2> What is Lorem IPSUM</h2>
              <p>
                Loem upsnddskjnkcnwekljdcnskcksajndas
                dasfruiehfnkdsjcskdnslkdfnfdf
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <img src={crush3} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2> What is Lorem </h2>
              <p>
                Loem upsnddskjnkcnwekljdcnskcksajndas
                dasfruiehfnkdsjcskdnslkdfnfdf
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="imgBox">
            <img src={savory1} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2> What is Lorem </h2>
              <p>Loem upsnddskjnkcnwekljdcnskc dasfruiehfnkdsjcskdnslkdfnfdf</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <img src={savory2} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2> What is Lorem IPSUM</h2>
              <p>
                Loem upsnddskjnkcnwekljdcnskcksajndas
                dasfruiehfnkdsjcskdnslkdfnfdf
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <img src={savory3} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2> What is Lorem </h2>
              <p>
                Loem upsnddskjnkcnwekljdcnskcksajndas
                dasfruiehfnkdsjcskdnslkdfnfdf
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
