import React from 'react';
import { Link } from 'react-router-dom';
import './botones.css'
const Botones = ({value, style,onClick,href=null}) => {
    return (
        <>

            <Link to={href}>
                <button className={style} type="submit" onClick={onClick}>
                    {value}
                </button>
            </Link>
            
        </>
    );
}

export default Botones;
