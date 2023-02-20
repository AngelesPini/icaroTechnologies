import React from 'react';
import Titulos from '../../atomos/textos/titulos';
import Subtitulos from '../../atomos/textos/subtitulos';
import Botones from '../../atomos/botones/botones';
import ImagenHeader from '../../../assetes/banner-home.png'
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitle">
            <Titulos value='Elevamos el rendimiento y productividad de tu empresa con' style='titulo tituloOscuro'/>
            <Titulos value='Realidad Virtual' style='titulo tituloClaro'/>
            <Subtitulos value='Icaro Tech es el agente de capacitación laboral del futuro, facilitando los procesos
            de capacitación e incrementando la productividad de las empresas.' style='subtituloMedium'/>
            <Botones value='Cotiza tu capacitación' style='btnPrincipal'/>
            </div>
            <div className="headerImg">
                <img src={ImagenHeader} alt="imagen vectorial de hombre empujando cajas sobre un carro" />
            </div>
        </div>
    );
}

export default Header;
