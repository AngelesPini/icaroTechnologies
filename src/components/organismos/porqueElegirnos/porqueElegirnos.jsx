import React from 'react';
import { useTranslation } from 'react-i18next';
import Titulos from '../../atomos/textos/titulos';
import GliderCards from '../../moleculas/gliderCards/gliderCards';
import './porque.css'
const PorqueElegirnos = () => {
    const [t,i18n] = useTranslation("global");
    return (
        <div className='porqueElegirnos'>
            <div className="tituloPorque">
            <Titulos value={t("WhyIcaro.titulo1")} style='titulo tituloOscuro'/>
            <div className='overline'></div>
            </div>
            <div className="gliderCardsMain">
                <GliderCards/>
            </div>

            
        </div>
    );
}

export default PorqueElegirnos;
