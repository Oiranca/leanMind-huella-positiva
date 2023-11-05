import * as React from 'react';
import './FormRegisterEsal.scss';
import { ContactPersonRegister } from './component/ContactPersonRegister/ContactPersonRegister';
import { OrganizationRegister } from './component/OrganizationRegister/OrganizationRegister';
import { SubmitButton } from '../../../atoms/SubmitButton';
import { Assent } from './component/Assent/Assent';

export const FormRegisterEsal: React.FC<{}> = () => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="FormRegisterEsal" method={'POST'} id="form" onSubmit={handleSubmit}>
      <ContactPersonRegister />
      <OrganizationRegister />
      <Assent />
      <SubmitButton text={'Registrar Entidad'} />
    </form>
  );
};

FormRegisterEsal.displayName = 'FormRegisterEsal';
