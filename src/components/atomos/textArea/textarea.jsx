import React from 'react';
import './textarea.css'
const Textarea = ({name, id, style, value}) => {
    return (
        <>
            <textarea name={name} id={id} placeholder={value} className={style}></textarea>
        </>
    );
}

export default Textarea;
