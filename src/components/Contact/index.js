import React, { Component } from 'react';

import { Container } from "./style";
import About from "./About";

class Contato extends Component {
  constructor() {
    super();
    this.state = {
      classname: 'hidden',
    };
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 430) {
      this.setState({
        className: 'show',
      })
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  render() {
    return (
      <Container>
        <div>
          <About className={this.state.className} />
        </div>
        <div>
          <h1> Msadasjd </h1>
        </div>
      </Container>
    );
  }
}

export default Contato;
