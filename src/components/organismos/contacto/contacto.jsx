import React from 'react';
import Titulos from '../../atomos/textos/titulos';
import Subtitulos from '../../atomos/textos/subtitulos';
import Form from '../../moleculas/form/form';

import './contacto.css'
import { useTranslation } from 'react-i18next';
const Contacto = () => {
    const [t,i18n] = useTranslation("global");
    return (
        <div className='contacto'>
            <div className="contactoTexto">
            <Titulos value={t("Contact.title1")} style='titulo tituloClaro'/>
            <Titulos value={t("Contact.title2")} style='titulo tituloOscuro'/>
            <Subtitulos value={t("Contact.subtitle1")}/>
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
