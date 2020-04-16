import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(226, 195, 232);
  background: linear-gradient(
    0deg,
    rgba(226, 195, 232, 1) 0%,
    rgba(238, 185, 255, 1) 100%
  );
  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .container {
    width: 80%;
    margin: 35px auto;
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

  .container .box .details .content h2 {
    margin: auto;
    padding: 0;
    font-size: 20px;
    color: #fff;
    margin-bottom: 50px;
  }

  .content p {
    margin: 10px 0 0;
    padding: 0;
  }
`;
