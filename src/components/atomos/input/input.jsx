import React from 'react';
import './input.css'
const Input = ({value,placeholder, style, type,name,onChange,validation}) => {
    return (
        <>
            <input 
                type={type} 
                placeholder={placeholder} 
                className={!validation ? `inputError ${style}`:`${style}`} 
                required
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    );
}

export default Input;
