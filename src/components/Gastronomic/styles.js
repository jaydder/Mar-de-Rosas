import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(226,195,232);
  background: linear-gradient(0deg, rgba(226,195,232,1) 0%, rgba(238,185,255,1) 100%);

.card-father {
  width: 100%;
  height: 288px;
  display: flex;
}

.card div img {
  width: 163px;
  height: 163px;
  border-radius: 100%;
  display:flex;
  align-items: center;
  background-size: 100vw;
}

.card {
  width: 30%;
  margin: auto;
  box-shadow: none;
}

.card div {
  width: 100%;
  height: 129px;
  display: flex;
  justify-content: center;
}

.card-text {
  height: 120px;
  display:flex;
  align-items:center;
  justify-content: center;
}


h1{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}


.card p {
  text-align: justify;
  padding: 0 20px;
}

`;
