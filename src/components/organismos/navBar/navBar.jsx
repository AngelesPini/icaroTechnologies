import React from 'react';
import './navBar.css'
import SelectIdiomas from '../../atomos/selectIdiomas/selectIdiomas';
import Menu from '../../atomos/textos/menu';
import Brand from '../../../assetes/brand.png'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='navBar'>
            <div className="brandNav">
            <img src={Brand} alt="logo de icaro technologies" />
            </div>
            <div className="brandMenu">
<<<<<<< HEAD
                <Menu value='Home' style='menuMedium'/>
                <Menu value='Servicios' style='menuMedium'/>
                <Menu value='Contacto' style='menuMedium'/>
                <SelectIdiomas/>
=======
                <Link to="/*">
                    <Menu value='Home' style='menuMedium'/>
                </Link>
                <Link to='/servicio'>
                    <Menu value='Servicios' style='menuMedium'/>
                </Link>
                <Link to='/contacto'>
                    <Menu value='Contacto' style='menuMedium'/>
                </Link>
                <select name="" id="">
                    <option value="">ES - MX</option>
                    <option value="">EN - US</option>
                </select>
>>>>>>> 5ced8b7bdbb03ab9f72267107fc24beb8d6275a6
            </div>

        </div>
    );
}

export default NavBar;
