import React, { Component } from "react";

import { Container } from "./style";

import { GiPhotoCamera } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";

class Values extends Component {
  constructor() {
    super();
    this.state = {
      className: "card",
      card: "card-father",
    };
  }
  handleScroll() {
    if (document.documentElement.scrollTop > 120) {
      this.setState({
        className: "card animate__animated animate__fadeInLeft",
      });
    } else {
      this.setState({
        className: "hidden",
      });
    }
  }
  componentDidMount() {
    window.onscroll = () => this.handleScroll();
  }
  render() {
    return (
      <Container className='values background-inverted'>
        <h1 className='title'> Valores </h1>
        <div className={this.state.card}>
          <div className={this.state.className}>
            <div>
              <GiPhotoCamera size={60} />
            </div>
            <h3> Planos com qualidade excepcional </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nisi sapien, porta at mattis et, tincidunt in ligula
            </p>
          </div>
          <div className={this.state.className}>
            <div>
              <FaHandHoldingHeart size={60} />
            </div>
            <h3> Levar ao cliente a melhor experiencia </h3>
            <p>
              Phasellus convallis lectus vitae arcu varius hendrerit. Fusce
              ornare velit pretium ipsum ex egestas. Duis eget velit vel nisi
              rhoncus venenatis. Ut vest
            </p>
          </div>
          <div className={this.state.className}>
            <div>
              <IoMdRestaurant size={60} />
            </div>
            <h3> Gastronomia de alta qualidade </h3>
            <p>
              metus nisl, faucibus sit amet justo eu, sagittis scelerisque
              nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisq
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default Values;
