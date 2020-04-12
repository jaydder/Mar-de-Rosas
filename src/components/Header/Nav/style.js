import styled from "styled-components";

export const Container = styled.div`
    ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
  }
  
  ul li {
     font-size: 15px;
     padding: 12px;
  }

  ul li a {
     text-decoration: none;
     color: #FFF;
     opacity: 0.5;
     font-family: 'Roboto Mono', monospace;
  }
 
 ul li a:hover {
     opacity: 1;
     
 }
`;