import * as React from 'react';
import './Esal.scss';
import { LinkText } from '../../../infrastructure/view/components/atoms/LinkText';

export const Esal: React.FC<{}> = () => {
  return (
    <article className="Esal">
      <header className={'title'}>
        <h1>Necesito Ayuda</h1>
      </header>
      <section className="context">
        <p>
          ¿Eres un colectivo o entidad y necesitas apoyo de voluntariado para llevar a
          cabo tu iniciativa?, ¿eres una persona con alguna necesidad y necesitas
          voluntarios que te ayuden? ¡No dudes en
          <LinkText text="escribirnos" to="/contact" />!
        </p>
        <p>
          Esta plataforma ha sido creada justamente con este objetivo, el de ayudarnos
          entre todos para salir lo antes posible de este complicado momento que estamos
          viviendo.
        </p>
        <p>
          Si tienes alguna duda consulta nuestras
          <LinkText text="preguntas frecuentes" to="/frequently-asked-questions" />.
        </p>
      </section>
      <section className="buttons">
        <LinkText to={'/organization-register'} text={'Entidad'} />
        <LinkText to={'/contact'} text={'Persona física'} />
      </section>
      <section className="footerMessage">
        <h2>Recuerda que juntos, somos más fuertes.</h2>
      </section>
    </article>
  );
};

Esal.displayName = 'Esal';
