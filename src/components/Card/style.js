import styled from "styled-components";
export const Container = styled.div `
  .card-father {
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
}
.card {
    width: 30%;
    height: 400px;
    margin: auto;
    border:  black;
    border: 2px groove rgba(19, 137, 255, 0.2);
    border-radius: 5px;
    box-shadow: none;
}
.card div {
    width: 100%;
    height: 70%;
    background-color: aqua;

}
.card p {
    background: rgb(223, 223, 223);
    height: 30%;
    text-align: justify;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
`;