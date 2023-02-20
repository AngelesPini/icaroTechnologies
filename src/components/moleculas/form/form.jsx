import React from 'react';
import Input from '../../atomos/input/input';
import TextArea from '../../atomos/textArea/textarea'
import Botones from '../../atomos/botones/botones';

import './form.css'
const Form = () => {
    return (
        <div className='form'>
            
            <div className="formCampos">
            <Input value='Nombre Completo*'/>
            <Input value='Correo Electrónico*'/>
            <Input value='Teléfono de contacto*'/>
            <TextArea value='¿En qué podemos ayudarte?*' />
            </div>
            <div className="formButton">
                <Botones value='Enviar' style='btnSecundario'/>
            </div>
        </div>
    );
}

export default Form;
