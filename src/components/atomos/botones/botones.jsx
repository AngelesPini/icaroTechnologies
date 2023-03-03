import React from 'react';
import './botones.css'
const Botones = ({value, style,onClick}) => {
    return (
        <>
            <button className={style} type="submit" onClick={onClick}>{value}</button>
            
        </>
    );
}

export default Botones;
