import { FieldForm } from '../Forms/FieldForm';
import { TextAreaForm } from '../Forms/TextAreaForm/TextAreaForm';
import { LinkText } from '../../../infrastructure/view/components/atoms/LinkText';
import { ROUTE } from '../../../infrastructure/http/routes';
import { LinkButton } from '../../../infrastructure/view/components/atoms/LinkButton/LinkButton';
import React from 'react';
import './FormContacts.scss';

export const FormContacts: React.FC<{}> = () => {
  return (
    <form className="FormContacts">
      <header className={'contactTitle'}>
        <h3>Contacta con nosotros</h3>
      </header>
      <article className="dataForm">
        <section className="fields">
          <FieldForm type="text" title="Nombre *" name="name" />
          <FieldForm type="text" title="Apellidos *" name="surname" />
          <FieldForm type="text" title="Teléfono *" name="phone-number" />
          <FieldForm type="email" title="Correo electrónico *" name="email" />
          <FieldForm type="email" title="Confirmar correo *" name="email-confirmation" />
          <FieldForm type="text" title="Asunto *" name="subject" />
          <TextAreaForm
            title={'Mensaje *'}
            name="message"
            cols={60}
            rows={8}
            placeholder=""
          />
        </section>
        <section className="captchaSection">
          <div className="consent">
            <input type="checkbox"></input>
            <label>
              Acepto la
              <LinkText to={ROUTE.privacyPolicy} text="política de privacidad" /> del
              sitio
            </label>
          </div>
          <div className="captcha">
            <p>CAPTCHA</p>
          </div>
          <LinkButton path="" text="Enviar" />
        </section>
      </article>
    </form>
  );
};
