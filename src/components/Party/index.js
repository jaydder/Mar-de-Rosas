import React from "react";
import Slider from "react-slick";
import { settings } from "./settings.slider";
import { Container, Page } from "./styles";

export default function Party() {
  return (
    <Container className='background party'>
      <h1 className='title'> Eventos </h1>
      <section>
        <div>
          <Slider {...settings}>
            <Page>
              <img
                src='https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.0-9/69591454_2353515551564525_5384417872690806784_n.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=4mde55mE0XIAX99n4vC&_nc_ht=scontent.fpoa11-1.fna&oh=9e78600931ee5452e1f06a36e5cb62c5&oe=5ECB3029'
                alt=''
              />
            </Page>
            <Page>
              <img
                src='https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.0-9/62388547_2298780867037994_6246472793169330176_n.jpg?_nc_cat=106&_nc_sid=8024bb&_nc_ohc=x5Jm0f76FzgAX8VQ08W&_nc_ht=scontent.fpoa11-1.fna&oh=543dac34c92164f0ff90141b134349e4&oe=5EC9E58D'
                alt=''
              />
            </Page>
            <Page>
              <img
                src='https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.0-9/60111518_2273595732889841_2219467299880960_o.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=c-bKHisJJZ8AX-uu5PP&_nc_ht=scontent.fpoa11-1.fna&oh=476cbf3b86a5185b0ec6889e5a5bc117&oe=5ECC2964'
                alt=''
              />
            </Page>
            <Page>
              <img
                src='https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.0-9/73076109_2387037384879008_622238055637450752_n.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=uicUMvszydwAX-ykIbR&_nc_ht=scontent.fpoa11-1.fna&oh=d771b681a9c52b6fa74fe0f29bbd1418&oe=5ECD064A'
                alt=''
              />
            </Page>
            <Page>
              <img
                src='https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.0-9/72340708_2387037264879020_1354536254552670208_n.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=fhVRm-bKcFsAX_SfHrl&_nc_ht=scontent.fpoa11-1.fna&oh=b1061ec391600c1b9be007c1c695c58b&oe=5ECC50C0'
                alt=''
              />
            </Page>
            <Page>
              <img
                src='https://scontent.fpoa11-1.fna.fbcdn.net/v/t1.0-9/72367251_2387036734879073_2195096324003594240_n.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=ou5DvsB-DjUAX--lKjU&_nc_ht=scontent.fpoa11-1.fna&oh=7dc03abe42d68181b824418b822e04f0&oe=5ECB22BF'
                alt=''
              />
            </Page>
          </Slider>
        </div>
        <div className='text'>
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </h1>
        </div>
      </section>
    </Container>
  );
}
