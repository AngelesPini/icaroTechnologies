import React from 'react';

const Iconos = ({imagen,valor}) => {
    return (
        <>
            <img src={imagen} alt={valor} />
        </>
    );
}

export default Iconos;
