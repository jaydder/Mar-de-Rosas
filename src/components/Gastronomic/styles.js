import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f3f3f3;

.card-father {
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: row;
}
.card {
  width: 30%;
  margin: auto;
  box-shadow: none;
}

.card div {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

}


h1{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: -10px;
}


.card p {
  height: 10%;
  max-height: 60px;
  text-align: justify;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.card h3 {
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}
`;
