import React from 'react';
import Cards from '../cards/cards';
import Language from '../../../assetes/iconos/language.png'
import Conditions from '../../../assetes/iconos/conditions.png'
import Person from '../../../assetes/iconos/person.png'
import Security from '../../../assetes/iconos/security.png'
import './glider.css'

import Glider from 'react-glider';
import 'glider-js/glider.min.css';


const GliderCards = () => {
    return (
        <div className="contenedorGlider">

        <Glider
        draggable
        slidesToShow={0.5}
        slidesToScroll={2.5}
        >
                <div>
                        <Cards imagen={Language} valor='icono' valueTitle='Disminuye los costos de incidentes' valueCuerpo ='Después de una capacitación inmersiva de 15 minutos, el 89% de los empleados se sienten más preparados para manejar los riesgos de seguridad.'styleTitle='cuerpoBold' styleCuerpo='cuerpoMedium'/>
                </div>
                <div>        
                        <Cards imagen={Conditions} valor='icono' valueTitle='Reduce el tiempo de capacitación' valueCuerpo ='Elimina interrupciones y reduce el tiempo necesario para capacitar de 8 horas a 15 minutos.' styleTitle='cuerpoBold' styleCuerpo='cuerpoMedium'/>
                </div>
                <div>        
                        <Cards imagen={Person} valor='icono' valueTitle='Disminuye la rotación de personal' valueCuerpo ='Prepara mental y físicamente a los empleados, aumentando la tasa de retención de personal..' styleTitle='cuerpoBold' styleCuerpo='cuerpoMedium'/>
                </div>
                <div>        
                        <Cards imagen={Security} valor='icono' valueTitle='Mejora la seguridad en el lugar de trabajo' valueCuerpo ='Permite aprender en un ambiente seguro que se siente como en la vida real, ideal para momentos críticos. ' styleTitle='cuerpoBold' styleCuerpo='cuerpoMedium'/>
                </div>
        </Glider>
        </div>

    );
}

export default GliderCards;
