import React from 'react';
import './transformamos.css'
import Titulos from '../../atomos/textos/titulos';
import Cuerpo from '../../atomos/textos/cuerpo';
const Transformamos = () => {
    return (
        <div className='transformamos'>
            <div className="transformamosTitulo">
            <Titulos value='Transformamos el ADN ' style='titulo tituloLila'/>
            <Titulos value='de la capacitación laboral' style='titulo tituloBlanco'/>
            </div>
            <div className="transformamosTextos">
                <Cuerpo value='Al igual que muchas tecologías disruptivas en la empresa, la capacitación en realidad virtual está reescribiendo las reglas sobre cómo calcular el impacto de la fusión de la capacitación corporativa con el aprendizaje experiencial.' style='cuerpoBlanco'/>
                <div className="textosNumero">
                    <Titulos value='96%' style='tituloNumeros'/>
                    <div className='overline'></div>
                    <Cuerpo value='De reducción en el tiempo de capacitación, pasando de 8 horas a 15 minutos.' style='cuerpoBlancoBold'/>
                </div>
                <div className="textosNumero">
                    <Titulos value='97%' style='tituloNumeros'/>
                    <div className='overline'></div>
                    <Cuerpo value='De los empleados se sienten preparados cuando se encuentran en situaciones peligrosas.' style='cuerpoBlancoBold'/>
                </div>
            </div>
        </div>
    );
}

export default Transformamos;
