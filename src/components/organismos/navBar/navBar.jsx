import React from 'react';
import './navBar.css'

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
                <select name="" id="">
                    <option value="">ES - MX</option>
                    <option value="">EN - US</option>
                </select>
            </div>

        </div>
    );
}

export default NavBar;
