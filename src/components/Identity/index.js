import React from "react";

import { Container } from "./styles";

export default function Kid() {
  return (
    <Container className="background indentity">
      <h1 className="title"> Quem Somos ?</h1>
      <div className="content">
        <div>
          <img
            src="https://www.oversodoinverso.com.br/wp-content/uploads/2018/12/0-23.jpg"
            alt=""
          />
        </div>
        <div className="text">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </span>
        </div>
      </div>
    </Container>
  );
}
