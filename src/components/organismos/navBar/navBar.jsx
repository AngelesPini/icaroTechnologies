import React from 'react';
import './navBar.css'
import SelectIdiomas from '../../atomos/selectIdiomas/selectIdiomas';
import Menu from '../../atomos/textos/menu';
import Brand from '../../../assetes/brand.png'
const NavBar = () => {
    return (
        <div className='navBar'>
            <div className="brandNav">
            <img src={Brand} alt="logo de icaro technologies" />
            </div>
            <div className="brandMenu">
                <Menu value='Home' style='menuMedium'/>
                <Menu value='Servicios' style='menuMedium'/>
                <Menu value='Contacto' style='menuMedium'/>
                <SelectIdiomas/>
            </div>

        </div>
    );
}

export default NavBar;
