import React from 'react';
import './input.css'
const Input = ({value, style, type}) => {
    return (
        <>
            <input type={type} placeholder={value} className={style} required/>
        </>
    );
}

export default Input;
