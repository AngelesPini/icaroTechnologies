import React from 'react';
import './textarea.css'
const Textarea = ({placeholder,name, id, style, value,onChange,validation}) => {
    return (
        <>
            <textarea 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                className={!validation ? `textareaError ${style}`:`${style}`} 
                value={value}
                onChange={onChange}
            >
            </textarea>
        </>
    );
}

export default Textarea;
