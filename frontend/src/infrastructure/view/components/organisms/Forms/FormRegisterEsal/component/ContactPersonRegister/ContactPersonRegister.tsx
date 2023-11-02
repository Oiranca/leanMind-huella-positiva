import React from 'react';
import './ContactPersonRegister.scss';
import { FieldForm } from '../../../../../../../../application/components/Forms/FieldForm';

export const ContactPersonRegister: React.FC<{}> = () => {
  return (
    <article className="ContactPersonRegister">
      <header className={'contactPersonTitle'}>
        <h1>Persona de Contacto</h1>
      </header>
      <section className={'formContactPerson'}>
        <FieldForm title={'Nombre *'} type={'text'} name={'Nombre'} />
        <FieldForm title={'Apellidos *'} type={'text'} name={'Apellidos'} />
        <FieldForm title={'Teléfono de contacto *'} type={'text'} name={'Telefono'} />
        <FieldForm title={'Email *'} type={'email'} name={'Email'} />
        <FieldForm title={'Confirmar email *'} type={'email'} name={'ConfirmarEmail'} />
        <FieldForm title={'Contraseña *'} type={'password'} name={'Password'} />
      </section>
    </article>
  );
};
