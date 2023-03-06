import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navMobile.css'
import SelectIdiomas from '../../atomos/selectIdiomas/selectIdiomas';
import Menu from '../../atomos/textos/menu';
import { Link } from 'react-router-dom';
import Logo from '../../../assetes/brand.png'
import { useTranslation } from 'react-i18next';
const NavBarMobile = () => {
  const [t,i18n] = useTranslation("global");
    return (
        <div className='navBarMobile '>
        <Navbar bg="light" expand="lg">
        <Container>
        <Link to='/'><Navbar.Brand href="#home"><img src={Logo} alt="logo de ícaro technologies" /></Navbar.Brand>                </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to='/'>
                    <Menu value={t("Navbar.home")} style='menuMedium'/>
                </Link>
                <Link to='/servicio'>
                    <Menu value={t("Navbar.services")}style='menuMedium'/>
                </Link>
                <Link to='/contacto'>
                    <Menu value={t("Navbar.contact")} style='menuMedium'/>
                </Link>
              <SelectIdiomas/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
}

export default NavBarMobile;
