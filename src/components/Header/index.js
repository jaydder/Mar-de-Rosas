import React, { Component } from "react";

import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

import { Container } from "./style";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <header>
          <Navbar
            collapseOnSelect
            expand='lg'
            bg='dark'
            fixed='top'
            variant='dark'>
            <Navbar.Brand>Mar de Rosas</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='justify-content-center'>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      activeClass='active'
                      to='main'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                      Home
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      activeClass='active'
                      to='values'
                      spy={true}
                      smooth={true}
                      offset={-35}
                      duration={500}>
                      Valores
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      activeClass='active'
                      to='indentity'
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}>
                      Quem Somos
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      activeClass='active'
                      to='gastronomic'
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={550}>
                      Gastronomia
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      activeClass='active'
                      to='party'
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={600}>
                      Eventos
                    </Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <Link
                      activeClass='active'
                      to='contact'
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={700}>
                      Contato
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </Container>
    );
  }
}
