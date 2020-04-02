import React, {Component} from 'react';

import {Container} from "./style";

class Card extends Component {
  render() {
    return (
      <Container>
        <div className="card-father">
          <div className="card">
            <div>Imagem</div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisi sapien, porta at mattis et,
              tincidunt in ligula </p>
          </div>
          <div className="card">
            <div> Imagem</div>
            <p> Phasellus convallis lectus vitae arcu varius hendrerit. Fusce ornare velit pretium ipsum tempus, luctus
              feugiat
              ex egestas. Duis eget velit vel nisi rhoncus venenatis. Ut vest </p>
          </div>
          <div className="card">
            <div> Imagem</div>
            <p> metus nisl, faucibus sit amet justo eu, sagittis scelerisque nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisq </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default Card;