import React from 'react';

const Imagen = ({value, description}) => {
    return (
        <>
            <img src={value} alt={description} />
        </>
    );
}

export default Imagen;
