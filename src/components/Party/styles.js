import styled from "styled-components";

export const Container = styled.div`
         width: 100%;
         height: 550px;

         .slick-slider .slick-list,
         .slick-slider .slick-track {
           border-radius: 12px;
           width: 60%;
         }
         section {
           display: flex;
           flex-direction: row;
         }
         div {
           width: 50%;
         }
         .center {
           margin-left: 30px;
           width: 73vw;
           margin-top: 6px;
         }

         .text {
           width: 40%;
           align-self: center;
           height: 50%;
           margin-left: 50px;
         }

         p {
           font-size: 23px;
           text-align: justify;
           font-family: "Libre Baskerville", serif;
         }
         p + p {
           margin-top: 15px;
         }

         @media (max-width: 650px) {
           .text {
             visibility: hidden;
           }
           .slick-slider .slick-list,
           .slick-slider .slick-track {
             border-radius: 0;
             width: 100%;
           }
           .center {
             margin-left: 0;
             width: 100vw;
             margin-top: 6px;
           }
           section {
             display: inline-block;

           }
         }
       `;

export const Page = styled.div`
  width: 100%;

  img {
    width: 700px;
    height: 400px;
    background-size: 100%;
    filter: brightness(1.15) contrast(1.2);
  }
`;
