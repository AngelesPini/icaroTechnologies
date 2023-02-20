import React from 'react';
import './menu.css'
const Menu = ({value, style}) => {
    return (
        <div>
            <p className={style}>{value}</p>
        </div>
    );
}

export default Menu;
