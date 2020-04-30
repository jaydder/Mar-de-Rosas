import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  h1 {
    margin-bottom: 20px;
  }

  .container {
    width: 80%;
    margin: 65px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .container .box {
    position: relative;
    width: 250px;
    height: 180px;
    margin-right: 45px;
    margin-bottom: 55px;
  }

  .container .box .imgBox {
    position: absolute;
    overflow: hidden;
    width: 290px;
    height: 240px;
    border-radius: 4px;
  }

  .container .box .imgBox img {
    width: 100%;
    height: 100%;
    transition: transform 2s;
  }

  .container .box:hover .imgBox img {
    transform: scale(1.2);
  }

  .container .box .details {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 30px;
    left: 20px;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    transform: scaleY(0);
    transition: transform 0.5s;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  .container .box:hover .details {
    transform: scaleY(1);
  }

  .container .box .details .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    padding: 10px;
    color: #fff;
  }

  h2 {
    text-align: center;
    font-size: 25px;
    margin: 30px auto;
    color: #fff;
    margin-bottom: 50px;
    font-family: Merienda;
  }

  @media (max-width: 650px) {
    .container .box {
      position: relative;
      height: 61px;
      right: 60px;
    }

    .container .box .imgBox {
      position: absolute;
      overflow: hidden;
      width: 200px;
      height: 104px;
      border-radius: 4px;
    }

    .container .box .details {
      width: 70%;
      height: 100%;
      left: 100%;
      top: 17px;
    }
    .container {
      margin: 0px auto;
      flex-direction: column;
    }

    h2 {
      margin-bottom: 30px;
    }
  }
`;
