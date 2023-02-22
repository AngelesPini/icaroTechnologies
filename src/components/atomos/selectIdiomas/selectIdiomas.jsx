import React from 'react';
import Form from 'react-bootstrap/Form';
import Arrow from '../../../assetes/iconos/down-arrow.png'
import Mx from '../../../assetes/iconos/mx.png'
import './selectIdiomas.css'
const SelectIdiomas = () => {
    return (
        <div className='selectIdiomas'>
            <Form.Select aria-label="Default select example">
                <option>ES - MX </option>
                <option value="1">ES - MX</option>
            </Form.Select>

        </div>
    );
}

export default SelectIdiomas;
