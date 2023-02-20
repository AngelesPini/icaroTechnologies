import React from 'react';
import Titulos from '../../atomos/textos/titulos';
import GliderCards from '../../moleculas/gliderCards/gliderCards';
import './porque.css'
const PorqueElegirnos = () => {
    return (
        <div className='porqueElegirnos'>
            <div className="tituloPorque">
            <Titulos value='¿Por qué elegirnos?' style='titulo tituloOscuro'/>
            <div className='overline'></div>
            </div>
            <div className="gliderCardsMain">
                <GliderCards/>
            </div>

            
        </div>
    );
}

export default PorqueElegirnos;
