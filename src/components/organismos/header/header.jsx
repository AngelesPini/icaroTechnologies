import React from 'react';
import Titulos from '../../atomos/textos/titulos';
import Subtitulos from '../../atomos/textos/subtitulos';
import Botones from '../../atomos/botones/botones';
import ImagenHeader from '../../../assetes/banner-home.png'
import './header.css'
import { useTranslation } from 'react-i18next';
const Header = () => {
    const [t,i18n] = useTranslation("global");

    return (
        <div className='header'>
            <div className="headerTitle">
            <Titulos value={t("Header.titulo1")} style='titulo tituloOscuro'/>
            <Titulos value={t("Header.subtitle1")} style='titulo tituloClaro'/>
            <Subtitulos value={t("Header.titulo2")} style='subtituloMedium'/>
            <Botones value={t("Header.buttonTraining")} style='btnPrincipal'/>
            </div>
            <div className="headerImg">
                <img src={ImagenHeader} alt={t("Header.img")} />
            </div>
        </div>
    );
}

export default Header;
