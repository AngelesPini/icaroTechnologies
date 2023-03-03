import React from 'react';
import Titulos from '../../atomos/textos/titulos';
import Subtitulos from '../../atomos/textos/subtitulos';
import './softwareEscalar.css'
import { useTranslation } from 'react-i18next';
const SoftwareEscalar = () => {
    const [t,i18n] = useTranslation("global");
    return (
        <div className='softwareEscalar'>
            <div className="softwareVideo">
                <video src=""></video>
            </div>
            <div className="softwareTextos">
                <Titulos value={t("SoftwareDescription.title1")}  style='titulo tituloOscuro'/>
                <Subtitulos value={t("SoftwareDescription.subtitle1")} style='subtituloMedium'/>
            </div>
        </div>
    );
}

export default SoftwareEscalar;
