import React from 'react';
import './botones.css'
const Botones = ({value, style}) => {
    return (
        <>
            <button className={style}>{value}</button>
            
        </>
    );
}

export default Botones;
