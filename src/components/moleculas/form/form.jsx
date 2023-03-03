import React, { useRef } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

import { addDoc,collection } from 'firebase/firestore';
import { db } from '../../../services/firebase';


import Input from '../../atomos/input/input';
import TextArea from '../../atomos/textArea/textarea'
import Botones from '../../atomos/botones/botones';

import './form.css'

const initialForm = {
    name:'',
    email:'',
    phone:'',
    comment:''
}
const Form = () => {

    const [t,i18n] = useTranslation("global");
    const {name,email,phone,comment,onInputChange,formState,onResetForm} = useForm(initialForm);
    const form = useRef();

    const onSubmitForm = async(e) => {

        e.preventDefault();
        console.log(form.current);
        //todo validacion de formularios
        const resp = await emailjs.sendForm('service_0e7sch8','template_gqnc5le',form.current,'S_DTKuRElj-5Ny5il');
        console.log(resp);
        const collectionRef = collection(db,'comments');
        addDoc(collectionRef,formState);
        onResetForm();
    }
    return (
        <form ref={form} className='form' onSubmit={onSubmitForm}>
            
            <div className="formCampos">
            <Input placeholder={t("Form.inputName")} name='name' value={name} onChange={onInputChange}/>
            <Input placeholder={t("Form.inputMail")} name='email' value={email} onChange={onInputChange}/>
            <Input placeholder={t("Form.inputPhone")} name='phone' value={phone} onChange={onInputChange}/>
            <TextArea placeholder={t("Form.inputComment")} name='comment' value={comment} onChange={onInputChange} />
            </div>
            <div className="formButton">
                <Botones value={t("Form.button")} style='btnSecundario' onClick={onSubmitForm}/>
            </div>
        </form>
    );
}

export default Form;
