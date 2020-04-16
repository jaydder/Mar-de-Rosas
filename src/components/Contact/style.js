import styled from 'styled-components';

export const Container = styled.div`
  height: 450px;

  .content {
    width: 100%;
    padding: 96px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .content section {
    width: 100%;
    max-width: 380px;
  }

  .content section p {
    font-size: 18px;
    color: #4f4f4f;
    line-height: 32px;
  }

  .content form {
    width: 100%;
    max-width: 450px;
  }

  .content form input,
  .content form textarea {
    margin-top: 8px;
  }
`;

export const Title = styled(Container)`
  background-image: none;
`;
