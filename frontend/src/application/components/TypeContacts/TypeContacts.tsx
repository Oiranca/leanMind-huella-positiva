import React from 'react';
import { LinkText } from '../../../infrastructure/view/components/atoms/LinkText';
import { ROUTE } from '../../../infrastructure/http/routes';
import { contextTypeContact, typeContact } from './TypeContextText';
import './TypeContacts.scss';

export const TypeContacts: React.FC<{}> = () => {
  return (
    <section className="TypeContacts">
      <header className="contactTitle">
        <h2>¡No dudes en ponerte en contacto con nosotros!</h2>
      </header>
      <article className={'typeContactsInformation'}>
        <ul>
          <li>
            <span className={'typeContacts'}>{typeContact.searchHelp}</span>
            {contextTypeContact.searchContext}
          </li>
          <li>
            <span className={'typeContacts'}>{typeContact.professionalHelp}</span>
            {contextTypeContact.pressContext}
          </li>
          <li>
            <span className={'typeContacts'}>{typeContact.advice}</span>
            {contextTypeContact.adviceContext}
          </li>
          <li>
            <span className={'typeContacts'}>{typeContact.press}</span>
            {contextTypeContact.pressContext}
          </li>
        </ul>
      </article>

      <article>
        <span className="faq">
          Si tienes alguna duda consulta nuestras
          <LinkText to={ROUTE.faq} text="preguntas frecuentes." />
        </span>
        <p className="slogan">¡Cada persona suma!</p>
      </article>
    </section>
  );
};
