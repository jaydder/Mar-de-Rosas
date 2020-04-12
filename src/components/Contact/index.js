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
    } else {
      this.setState({
        className: 'hidden',
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
        <div className="content fadeIn">
        
          <form >
            <input
              placeholder="Assunto"
            />
            <textarea
              placeholder="Descrição"
            />
            <input
              placeholder="Email"
            />
            <button type="submit" className="button"> Enviar</button>
          </form>
        </div>
      </Container>
    );
  }
}

export default Contato;
