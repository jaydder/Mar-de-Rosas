import React from 'react';

import { Container } from './styles';

export default function Gastronomic() {
  return (
    <Container>
      <h1 className="title"> Gastronomia </h1>
      <div className="card-father">
        <div className="card">
          <div> <img src="" alt=""/> </div>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisi sapien, porta at mattis et,
              tincidunt in ligula </p>
        </div>
        <div className="card">
          <div> </div>
          <p> Phasellus convallis lectus vitae arcu varius hendrerit. Fusce ornare velit pretium ipsum
              ex egestas. Duis eget velit vel nisi rhoncus venenatis. Ut vest </p>
        </div>
        <div className="card">
          <div> </div>
          <p> metus nisl, faucibus sit amet justo eu, sagittis scelerisque nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisq </p>
        </div>
      </div>
      <div className="card-father">
        <div className="card">
          <div> </div>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisi sapien, porta at mattis et,
              tincidunt in ligula </p>
        </div>
        <div className="card">
          <div> </div>
          <p> Phasellus convallis lectus vitae arcu varius hendrerit. Fusce ornare velit pretium ipsum
              ex egestas. Duis eget velit vel nisi rhoncus venenatis. Ut vest </p>
        </div>
        <div className="card">
          <div> </div>
          <p> metus nisl, faucibus sit amet justo eu, sagittis scelerisque nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisq </p>
        </div>
      </div>
    </Container>
  );
}
