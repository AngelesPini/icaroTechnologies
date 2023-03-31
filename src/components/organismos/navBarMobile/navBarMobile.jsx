import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navMobile.css'
import SelectIdiomas from '../../atomos/selectIdiomas/selectIdiomas';
import Menu from '../../atomos/textos/menu';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assetes/brand.png'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const NavBarMobile = () => {
  const [expanded, setExpanded] = useState(false)

  const [t,i18n] = useTranslation("global");
    return (
        <div className='navBarMobile '>
        <Navbar bg="light" expand="lg" expanded={expanded}>
        <Container >
        <NavLink to='/'><Navbar.Brand href="#home"><img src={Logo} alt="logo de ícaro technologies" width='218' height='50' />
          </Navbar.Brand>               
        </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
                <NavLink onClick={ ()=> setExpanded(false)} to='/' className={({isActive}) => isActive ? 'menuActive' : ""}>
                    <Menu value={t("Navbar.home")} style='menuMedium' />
                </NavLink>
                <NavLink onClick={ ()=> setExpanded(false)} to='/servicio' className={({isActive}) => isActive ? 'menuActive' : ""}>
                    <Menu value={t("Navbar.services")}style='menuMedium'/>
                </NavLink>
                <NavLink onClick={ ()=> setExpanded(false)} to='/contacto' className={({isActive}) => isActive ? 'menuActive' : ""}>
                    <Menu value={t("Navbar.contact")} style='menuMedium'/>
                </NavLink>
              <SelectIdiomas/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
}

export default NavBarMobile;
