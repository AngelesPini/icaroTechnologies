import React from 'react';
import Titulos from '../../atomos/textos/titulos';
import Subtitulos from '../../atomos/textos/subtitulos';
import './softwareEscalar.css'
const SoftwareEscalar = () => {
    return (
        <div className='softwareEscalar'>
            <div className="softwareVideo">
                <video src=""></video>
            </div>
            <div className="softwareTextos">
                <Titulos value='Un software para escalar tus procesos de capacitación laboral' style='titulo tituloOscuro'/>
                <Subtitulos value='Con Icaro tu proceso de capacitación se personaliza a las necesidades de tu empresa, utilizando métricas que ayudan a tu empresa a evaluar el desempeño , habilidades y áreas de mejora de tu personal.' style='subtituloMedium'/>
            </div>
        </div>
    );
}

export default SoftwareEscalar;
