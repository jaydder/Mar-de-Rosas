import styled from 'styled-components';
import img from '../../images/banner_home.png';

export const Container = styled.div`
  background: url(${img});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  color: #fff;
`;

export const Text = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: merienda;
  padding: 111px 100px;

  h1 {
    font-size: 40px;
    margin-bottom: 12px;
  }
`;

export const Cortina = styled.div`
  background: black;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
`;
