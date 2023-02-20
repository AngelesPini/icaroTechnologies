import React from 'react';
import './cuerpo.css'
const Cuerpo = ({value,style}) => {
    return (
        <>
            <p className={style}>{value}</p>
        </>
    );
}

export default Cuerpo;
