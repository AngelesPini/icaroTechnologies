import React from 'react';
import Cuerpo from '../../atomos/textos/cuerpo';
import Iconos from '../../atomos/iconos/iconos';
import Imagen from '../../atomos/imagen/imagen'

import Call from '../../../assetes/iconos/call.png'
import Email from '../../../assetes/iconos/email.png'
import Location from '../../../assetes/iconos/location.png'
import Youtube from '../../../assetes/iconos/youtube.png'
import LogoFooter from '../../../assetes/iconos/logoFooter.png'


import './footer.css'

const Footer = () => {
    return (
        <div className="footerGenerals">
            <div className="lineFooter"></div>
        <div className='footer'>
            <div className="footerDireccion">
            <Iconos imagen={Location} valor='icono de locación en maps'/>
            <Cuerpo value='Querétaro. El Marqués, 76269 Santiago de Querétaro.' style='cuerpoFooter'/>
            </div>
            <div className="footerContacto">
                <ul>
                    <li><Iconos imagen={Email} valor= 'icono de email'/><Cuerpo value='hello@icarotechnologies.tech' style='cuerpoFooter'/></li>
                    <li><Iconos imagen={Call} valor='icono de teléfono'/> <Cuerpo value='+52 55 6566 7506' style='cuerpoFooter'/></li>
                    <li><Iconos imagen={Youtube}valor='icono de youtube'/><Cuerpo value=' /@icarotech-mx' style='cuerpoFooter' href='https://www.youtube.com/@icarotech-mx'/> </li>
                </ul>

            </div>
            <div className="footerLogo">
            <Imagen value={LogoFooter} description='Logo minimalista de Icaro technologies'/>
            </div>
        </div>
        </div>
    );
}

export default Footer;
