import React from 'react';
import Cards from '../cards/cards';
import Language from '../../../assetes/iconos/language.png'
import Conditions from '../../../assetes/iconos/conditions.png'
import Person from '../../../assetes/iconos/person.png'
import Security from '../../../assetes/iconos/security.png'
import './glider.css'

import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import { useTranslation } from 'react-i18next';


const GliderCards = () => {
        const [t,i18n] = useTranslation("global");

    return (
        <div className="contenedorGlider">

        <Glider
        draggable
        slidesToShow={0.5}
        slidesToScroll={2.5}
        >
                <div>
                        <Cards imagen={Language} valor='icono' valueTitle={t("WhyIcaro.GliderCards.card1Title")} valueCuerpo={t("WhyIcaro.GliderCards.card1")} styleTitle='cuerpoBold' styleCuerpo='cuerpoMedium'/>
                </div>
                <div>        
                        <Cards imagen={Conditions} valor='icono' valueTitle={t("WhyIcaro.GliderCards.card2Title")} valueCuerpo={t("WhyIcaro.GliderCards.card2")} styleTitle='cuerpoBold' styleCuerpo='cuerpoMedium'/>
                </div>
                <div>        
                        <Cards imagen={Person} valor='icono' valueTitle={t("WhyIcaro.GliderCards.card3Title")} valueCuerpo={t("WhyIcaro.GliderCards.card3")}  styleTitle='cuerpoBold' styleCuerpo='cuerpoMedium'/>
                </div>
                <div>        
                        <Cards imagen={Security} valor='icono' valueTitle={t("WhyIcaro.GliderCards.card4Title")} valueCuerpo={t("WhyIcaro.GliderCards.card4")}  styleTitle='cuerpoBold' styleCuerpo='cuerpoMedium'/>
                </div>
        </Glider>
        </div>

    );
}

export default GliderCards;
