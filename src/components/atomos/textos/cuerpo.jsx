import React from 'react';
import './cuerpo.css'
const Cuerpo = ({value,style,href=null}) => {
    return (
        <>
            {
                href === null
                ?(
                    <p className={style}>{value}</p>
                 )
                :(
                    <a href="https://www.youtube.com/@icarotech-mx" target='_blank' className={style}>@icarotech</a>
                 )
            }

        </>
    );
}

export default Cuerpo;
