import React from 'react';
import './navBar.css'
import SelectIdiomas from '../../atomos/selectIdiomas/selectIdiomas';
import Menu from '../../atomos/textos/menu';
import Brand from '../../../assetes/brand.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const [t,i18n] = useTranslation("global");
    return (
        <div className='navBar'>
            <div className="brandNav">
            <img src={Brand} alt="logo de icaro technologies" />
            </div>
            <div className="brandMenu">
                <Link to='/'>
                    <Menu value={t("Navbar.home")} style='menuMedium'/>
                </Link>
                <Link to='/servicio'>
                    <Menu value={t("Navbar.services")} style='menuMedium'/>
                </Link>
                <Link to='/contacto'>
                    <Menu value={t("Navbar.contact")} style='menuMedium'/>
                </Link>
                <SelectIdiomas/>
            </div>

        </div>
    );
}

export default NavBar;
