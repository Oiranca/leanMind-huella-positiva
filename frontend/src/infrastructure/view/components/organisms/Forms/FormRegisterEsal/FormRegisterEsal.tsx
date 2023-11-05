import * as React from 'react';
import './FormRegisterEsal.scss';
import { ContactPersonRegister } from './component/ContactPersonRegister/ContactPersonRegister';
import { OrganizationRegister } from './component/OrganizationRegister/OrganizationRegister';
import { Label } from '../../../atoms/Label';
import { FormRadio } from '../../../molecules/FormRadio';
import { LinkText } from '../../../atoms/LinkText';
import { SubmitButton } from '../../../atoms/SubmitButton';

export const FormRegisterEsal: React.FC<{}> = () => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="FormRegisterEsal" method={'POST'} id="form" onSubmit={handleSubmit}>
      <ContactPersonRegister />
      <OrganizationRegister />
      <section>
        <Label text={'Consentimientos *'} />
        <section className={'data-protection'}>
          <FormRadio
            title={'Política Privacidad'}
            type={'checkbox'}
            name={'Política Privacidad'}
            value={''}
            checked={false}
          />
          <p>
            Estoy de acuerdo de con la {''}
            <LinkText to={'/'} text={'Política de privacidad'} />.
          </p>
        </section>
        <section className={'data-protection'}>
          <FormRadio
            title={'Protección de datos'}
            type={'checkbox'}
            name={'Proteccion de datos'}
            value={''}
            checked={false}
          />
          <p>
            Estoy de acuerdo de con la {''}
            <LinkText to={'/'} text={'Política de protección de datos'} />.
          </p>
        </section>
        <div className={'button-register'}>
          <SubmitButton text={'Registrar Entidad'} />
        </div>
      </section>
    </form>
  );
};

FormRegisterEsal.displayName = 'FormRegisterEsal';
