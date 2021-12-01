import React, { useState } from "react";
import { BsFillFilePersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

const FormBuyer = ({ createOrder }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }

    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )

    return (
        <div className="formContainer">
            <h2 className="formTitle">Datos de Contacto</h2>
            <form className="formContainerInput">
                <div className="formInput">
                    <span><BsFillFilePersonFill className="iconsForm"/></span>
                    <input placeholder="Nombre y Apellido" name="name" autoComplete="off" value={form.name} onChange={getContactData} type="text" required/><strong>*</strong>
                </div>
                <div className="formInput">
                <span><BsFillTelephoneFill className="iconsForm"/></span>
                    <input placeholder="Teléfono" name="phone" autoComplete="off" value={form.phone} onChange={getContactData} type="text" required/><strong>*</strong>
                </div>
                <div className = "formInput">
                <span><MdAlternateEmail className="iconsForm"/></span>
                    <input placeholder="E-mail" name="email" autoComplete="off" value={form.email} onChange={getContactData} type="email" required/><strong>*</strong>
                </div>
                <div className="formInput">
                <span><MdAlternateEmail className="iconsForm"/></span>
                    <input placeholder="Confirma E-mail" name="emailConfirmation" autoComplete="off" value={form.emailConfirmation} onChange={getContactData} type="email" required/><strong>*</strong>
                </div>
            </form>
            <button type="submit" className="finishShop" disabled={disabled} onClick={finalizePurchase}>Comprar</button>
            <h5>* Campos obligatorios</h5>  
        </div>
    )
}

export default FormBuyer