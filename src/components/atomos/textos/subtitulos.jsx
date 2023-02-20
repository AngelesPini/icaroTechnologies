import React from 'react';
import './subtitulos.css'
const Subtitulos = ({value, style}) => {
    return (
        <>
            <p className={style}>{value}</p>
        </>
    );
}

export default Subtitulos;
