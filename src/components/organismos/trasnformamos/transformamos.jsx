import React from 'react';
import './transformamos.css'
import Titulos from '../../atomos/textos/titulos';
import Cuerpo from '../../atomos/textos/cuerpo';
import { useTranslation } from 'react-i18next';
const Transformamos = () => {
    const [t,i18n] = useTranslation("global");
    return (
        <div className='transformamos'>
            <div className="transformamosTitulo">
            <Titulos value={t("Transform.title1")} style='titulo tituloLila'/>
            <Titulos value={t("Transform.title2")}style='titulo tituloBlanco'/>
            </div>
            <div className="transformamosTextos">
                <Cuerpo value={t("Transform.Header.headerText")} style='cuerpoBlanco'/>
                <div className="textosNumero">
                    <Titulos value='96%' style='tituloNumeros'/>
                    <div className='overline'></div>
                    <Cuerpo value={t("Transform.Header.headerSubtitle1")} style='cuerpoBlancoBold'/>
                </div>
                <div className="textosNumero">
                    <Titulos value='97%' style='tituloNumeros'/>
                    <div className='overline'></div>
                    <Cuerpo value={t("Transform.Header.headerSubtitle2")} style='cuerpoBlancoBold'/>
                </div>
            </div>
        </div>
    );
}

export default Transformamos;
