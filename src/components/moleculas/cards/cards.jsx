import React from 'react';
import'./cards.css'
import Iconos from '../../atomos/iconos/iconos';
import Cuerpo from '../../atomos/textos/cuerpo';
const Cards = ({imagen, valor, valueTitle, valueCuerpo, styleTitle,styleCuerpo}) => {
    return (
        <div className='card'>  
        <Iconos imagen={imagen} valor={valor}/>
        <Cuerpo value={valueTitle} style={styleTitle}/>
        <Cuerpo value={valueCuerpo} style={styleCuerpo}/>
            
        </div>
    );
}

export default Cards;
