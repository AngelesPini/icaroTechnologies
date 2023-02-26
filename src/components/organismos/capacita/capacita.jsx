import React from 'react';
import Titulos from '../../atomos/textos/titulos';
import Subtitulos from '../../atomos/textos/subtitulos';
import Cuerpo from '../../atomos/textos/cuerpo';
import Botones from '../../atomos/botones/botones';

import './capacita.css'
const Capacita = () => {
    return (
        <div className='capacita'>
            <div className="capacitaTitulo">
                <Titulos value='Capacita a tu personal hoy con Icaro' style='titulo tituloOscuro'/>
            </div>
            <div className="capacitaMain">
                <div className="mainLista">
                    <Subtitulos value='Las empresas que capacitan con realidad virtual observan un impacto medible.' style='subtituloCapacita'/>
                    <ul>
                        <li><Cuerpo value='Disminuye los costos de incidentes' style='cuerpoMedium'/></li>
                        <li><Cuerpo value='Reduce el tiempo de capacitación' style='cuerpoMedium'/></li>
                        <li><Cuerpo value='Disminuye la rotación de tu personal' style='cuerpoMedium'/></li>
                        <li><Cuerpo value='Mejora la seguridad en el lugar de trabajo' style='cuerpoMedium'/></li>
                        <li><Cuerpo value='Reduce el tiempo de incorporación' style='cuerpoMedium'/></li>
                    </ul>
                    <Botones value='Contacta un agente' style='btnPrincipal'/>
                </div>
                <div className="mainVideo">
                <video src=""></video>
                </div>
            </div>
            
        </div>
    );
}

export default Capacita;
