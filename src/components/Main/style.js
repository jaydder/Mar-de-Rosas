import styled from "styled-components";

const getBackground = type => {
  if (type === "home_background") {
    return `
        background-image: url('https://img.ibxk.com.br/2019/10/09/09173901060229.jpg');
    `;
  } else if (type === "products_background") {
    return `
        background-image: url('https://www.radcom.com/uploads/banner-2.png');
    `
  }
}

export const Container = styled.div`

    ${({ type }) => getBackground(type)}
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: #FFF;
    padding-top: 400px;
    padding-bottom: 200px;
    display: block;


`;
