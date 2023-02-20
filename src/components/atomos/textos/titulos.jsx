import React from 'react';
import './titulos.css'
const Titulos = ({value, style}) => {
    return (
        <>
            <p className={style}>{value}</p>
        </>
    );
}

export default Titulos;
