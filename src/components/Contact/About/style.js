import styled from "styled-components";


export const Container = styled.div`
  .about-wrapper {
    height: 100%;
    width: 100%;
  }
  .about-text {
    margin: auto;
  }
  .show {
     position: absolute;
     left: -30em;
     width: 30em;
     height: 20em;
     -webkit-animation: slide-in 1s forwards;
     animation: slide-in 2s forwards;
  }
  @-webkit-keyframes slide-in {
    100% { left: 0 }
  }
  @keyframes slide-in {
    100% { left: 0 }
  }
  
  .triangulo {
    width: 1px;
    margin-top: 40px;
    height: 1px;
    border: solid 186px transparent;
    border-bottom: solid 377px rgba(44,132,255,0.91);
    border-top: none;
    transform: rotate(90deg);
  }
 
`;