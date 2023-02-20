import React from 'react';
import Titulos from '../../atomos/textos/titulos';
import Subtitulos from '../../atomos/textos/subtitulos';
import Form from '../../moleculas/form/form';

import './contacto.css'
const Contacto = () => {
    return (
        <div className='contacto'>
            <div className="contactoTexto">
            <Titulos value='Transforma' style='titulo tituloClaro'/>
            <Titulos value='tu empresa con Icaro' style='titulo tituloOscuro'/>
            <Subtitulos value='Comparte la necesidad de tu empresa y un especialista en realidad virtual de Icaro Tech se pondrá en contacto contigo.' style='subtituloMedium'/>
            </div>

            <div className="contactoForm">
                <form action="">
                    <Form/>
                </form>
            </div>
            

        </div>
    );
}

export default Contacto;
