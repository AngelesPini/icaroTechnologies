import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navMobile.css'
import SelectIdiomas from '../../atomos/selectIdiomas/selectIdiomas';
import Menu from '../../atomos/textos/menu';

import Logo from '../../../assetes/brand.png'
const NavBarMobile = () => {
    return (
        <div className='navBarMobile '>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} alt="logo de ícaro technologies" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><Menu value='Home' style='menuMedium'/></Nav.Link>
              <Nav.Link href="#link"><Menu value='Servicios' style='menuMedium'/></Nav.Link>
              <Nav.Link href="#link"><Menu value='Contacto' style='menuMedium'/></Nav.Link>
              <SelectIdiomas/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
}

export default NavBarMobile;
