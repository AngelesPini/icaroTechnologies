import React from 'react';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import Arrow from '../../../assetes/iconos/down-arrow.png'
import Mx from '../../../assetes/iconos/mx.png'
import './selectIdiomas.css'
const SelectIdiomas = () => {

    const [t,i18n] = useTranslation("global");

    const onChangeIdiomas = ({target})=>{
        switch (target.value) {
            case '0':
                i18n.changeLanguage("es");
                break;
            case '1':
                i18n.changeLanguage("en")
                break;
            default:
                break;
        }
    }

    return (
        <div className='selectIdiomas'>
            <Form.Select aria-label="Default select example" onChange={onChangeIdiomas}>
                <option value="0">ES - MX </option>
                <option value="1">EN - US</option>
            </Form.Select>

        </div>
    );
}

export default SelectIdiomas;
