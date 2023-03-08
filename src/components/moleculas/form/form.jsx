import React, { useRef } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

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


const formValidations = {
    email:[(value)=>value === "",'El email es obligatorio'],
    name:[(value)=>value === "",'El nombre es obligatorio'],
    phone:[(value)=>value === "",'El télefono es obligatorio'],
    comments:[(value)=>value === "",'Debe ingresar un comentario']
  }

const Form = () => {

    const [t,i18n] = useTranslation("global");
    const {name,email,phone,comment,onInputChange,formState,onResetForm,
           nameValid,emailValid,phoneValid,commentsValid,isFormValid } = useForm(initialForm,formValidations);
    const form = useRef();

    const onSubmitForm = async(e) => {

        e.preventDefault();
        //todo validacion de formularios

        if(isFormValid) return;
        const resp = await emailjs.sendForm('service_1jvzm5h','template_j4jyn3v',form.current,'fRqVX3k0Mx8-lZBzb');
        const collectionRef = collection(db,'comments');
        addDoc(collectionRef,formState);
        onResetForm();

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title:t("Form.msjSuccess")
          })
    }
    return (
        <form ref={form} className='form' onSubmit={onSubmitForm}>
            
            <div className="formCampos">
            <Input placeholder={t("Form.inputName")} name='name' value={name} onChange={onInputChange} validation={nameValid}/>
            <Input placeholder={t("Form.inputMail")} name='email' value={email} onChange={onInputChange} validation={emailValid}/>
            <Input placeholder={t("Form.inputPhone")} name='phone' value={phone} onChange={onInputChange} validation={phoneValid}/>
            <TextArea placeholder={t("Form.inputComment")} name='comment' value={comment} onChange={onInputChange}validation={commentsValid} />
            </div>
            <div className="formButton">
                <Botones value={t("Form.button")} style='btnSecundario' onClick={onSubmitForm}/>
            </div>
        </form>
    );
}

export default Form;
