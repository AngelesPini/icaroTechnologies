import React from 'react';
import Titulos from '../../atomos/textos/titulos';
import Subtitulos from '../../atomos/textos/subtitulos';
import Cuerpo from '../../atomos/textos/cuerpo';
import Botones from '../../atomos/botones/botones';

import './capacita.css'
import { useTranslation } from 'react-i18next';
const Capacita = () => {
    const [t,i18n] = useTranslation("global");
    return (
        <div className='capacita'>
            <div className="capacitaTitulo">
                <Titulos value={t("Develop.title1")} style='titulo tituloOscuro'/>
            </div>
            <div className="capacitaMain">
                <div className="mainLista">
                    <Subtitulos value={t("Develop.subtitle1")}  style='subtituloCapacita'/>
                    <ul>
                        <li><Cuerpo value={t("Develop.item1")}  style='cuerpoMedium'/></li>
                        <li><Cuerpo value={t("Develop.item2")}  style='cuerpoMedium'/></li>
                        <li><Cuerpo value={t("Develop.item3")}   style='cuerpoMedium'/></li>
                        <li><Cuerpo value={t("Develop.item4")}  style='cuerpoMedium'/></li>
                        <li><Cuerpo value={t("Develop.item5")}   style='cuerpoMedium'/></li>
                    </ul>
                    <Botones value={t("Develop.button")} style='btnPrincipal' href='/contacto'/>
                </div>
                <div className="mainVideo">
                    <iframe width="560" height="315" src={t("Develop.video")}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            
        </div>
    );
}

export default Capacita;
