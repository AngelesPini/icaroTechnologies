import React from 'react';
import './textarea.css'
const Textarea = ({placeholder,name, id, style, value,onChange}) => {
    return (
        <>
            <textarea 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                className={style} 
                value={value}
                onChange={onChange}
            >
            </textarea>
        </>
    );
}

export default Textarea;
