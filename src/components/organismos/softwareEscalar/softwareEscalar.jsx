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
            <iframe width="560" height="315" src={t("Develop.video")}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="softwareTextos">
                <Titulos value={t("SoftwareDescription.title1")}  style='titulo tituloOscuro'/>
                <Subtitulos value={t("SoftwareDescription.subtitle1")} style='subtituloMedium'/>
            </div>
        </div>
    );
}

export default SoftwareEscalar;
