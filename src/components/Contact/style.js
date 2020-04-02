import styled from "styled-components";

export const Container = styled.div `
    height: 450px;
    background-image: url("https://cdn-images-1.medium.com/max/1554/1*M0RYO_sJBdXyzLU_uEZQoQ.jpeg");
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;

`;

export const Title = styled(Container)`
     background-image: none;
`;
