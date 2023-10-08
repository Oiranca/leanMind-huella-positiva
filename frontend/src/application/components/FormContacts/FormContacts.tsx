import { FieldForm } from '../Forms/FieldForm';
import { TextAreaForm } from '../Forms/TextAreaForm/TextAreaForm';
import { LinkText } from '../../../infrastructure/view/components/atoms/LinkText';
import { ROUTE } from '../../../infrastructure/http/routes';
import { LinkButton } from '../../../infrastructure/view/components/atoms/LinkButton/LinkButton';
import React from 'react';
import './FormContacts.scss';

export const FormContacts: React.FC<{}> = () => {
  return (
    <div className="contact-form-div">
      <header>
        <h3>Contacta con nosotros</h3>
      </header>
      <div className="form-fields-div">
        <div className="fields">
          <section>
            <FieldForm type="text" title="Nombre *" name="name" />
            <FieldForm type="text" title="Apellidos *" name="surname" />
          </section>

          <section>
            <FieldForm type="email" title="Correo electrónico *" name="email" />
            <FieldForm
              type="email"
              title="Confirmar correo *"
              name="email-confirmation"
            />
          </section>
          <section>
            <FieldForm type="text" title="Teléfono *" name="phone-number" />
            <FieldForm type="text" title="Asunto *" name="subject" />
          </section>
          <div className="text-area">
            <TextAreaForm
              title={'Mensaje *'}
              name="message"
              cols={60}
              rows={8}
              placeholder=""
            />
          </div>
        </div>
        <div className="consent-captcha">
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
        </div>
      </div>
    </div>
  );
};
