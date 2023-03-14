import React from 'react';
import './navBar.css'
import SelectIdiomas from '../../atomos/selectIdiomas/selectIdiomas';
import Menu from '../../atomos/textos/menu';
import Brand from '../../../assetes/brand.png'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const [t,i18n] = useTranslation("global");
    return (
        <div className='navBar'>
            <div className="brandNav">
            <NavLink to='/'>
                <img src={Brand} alt="logo de icaro technologies"  width='218px' height='50px'/>
            </NavLink>
            </div>
            <div className="brandMenu">
                <NavLink to='/' className={({isActive}) => isActive ? 'menuActive' : ""}>
                    <Menu value={t("Navbar.home")} style='menuMedium'/>
                </NavLink>
                <NavLink to='/servicio' className={({isActive}) => isActive ? 'menuActive' : ""}>
                    <Menu value={t("Navbar.services")} style='menuMedium'/>
                </NavLink>
                <NavLink to='/contacto' className={({isActive}) => isActive ? 'menuActive' : ""}>
                    <Menu value={t("Navbar.contact")} style='menuMedium'/>
                </NavLink>
                <SelectIdiomas/>
            </div>

        </div>
    );
}

export default NavBar;
