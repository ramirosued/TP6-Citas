'use client'
import Titulo from '@/app/components/Titulo/Titulo';
import Formulario from '@/app/components/Formulario/Formulario';
import { useState } from 'react'

import './contacto.css';

export default function Contacto() {
    return(
        <>
        <Titulo texto="Nuestro contacto"/>
        <div className='contacto'>
            <div className='formulario'>
            <Formulario name={'Nombre'} name1={'Nombre mascota'} fecha={"Mail"} hora={'Telefono'} sintomas={'Cuentanos el problema'} tipo={'text'} tipo1={'text'} > </Formulario>
            </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.046906220281!2d-58.43221588503038!3d-34.60356844903331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca688994eb61%3A0xd055df0a7dafa86e!2sParque%20Centenario!5e0!3m2!1ses!2sar!4v1720091350617!5m2!1ses!2sar" width="1400" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        </>
    )
}