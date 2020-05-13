import React from "react";
import { Carousel } from "react-bootstrap";
import { Container } from "./styles";

export default function Party() {
  return (
    <Container className='party'>
      <h1 className='title'> Eventos </h1>
      <section>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className=' img-fluid drounded mx-auto d-block img-thumbnail'
                src='https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.0-9/72367251_2387036734879073_2195096324003594240_n.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=ou5DvsB-DjUAX--lKjU&_nc_ht=scontent.fpoa11-1.fna&oh=7dc03abe42d68181b824418b822e04f0&oe=5ECB22BF'
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='img-fluid rounded mx-auto d-block img-thumbnail'
                src='https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.0-9/72367251_2387036734879073_2195096324003594240_n.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=ou5DvsB-DjUAX--lKjU&_nc_ht=scontent.fpoa11-1.fna&oh=7dc03abe42d68181b824418b822e04f0&oe=5ECB22BF'
                alt='Third slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='img-fluid rounded mx-auto d-block img-thumbnail'
                src='https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.0-9/72367251_2387036734879073_2195096324003594240_n.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=ou5DvsB-DjUAX--lKjU&_nc_ht=scontent.fpoa11-1.fna&oh=7dc03abe42d68181b824418b822e04f0&oe=5ECB22BF'
                alt='Third slide'
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </Container>
  );
}
