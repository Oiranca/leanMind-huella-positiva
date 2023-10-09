import React from 'react';
import comment from '../../assets/comment_check.svg';
import './HeaderLegalAdvice.scss';

export const HeaderLegalAdvice: React.FC<{}> = () => {
  return (
    <article className={'HeaderLegalAdvice'}>
      <header>
        <h1>Aviso Legal</h1>
      </header>
      <section className={'adviceBody'}>
        <img
          className={'commentImage'}
          src={comment}
          alt={'Imagen con forma de bocadillo de cómic'}
        />
        <p>
          Las presentes condiciones legales de la Asociación Cultural SoyMamut son
          establecidas bajo la denominación comercial Soy Mamut con el fin de determinar
          los criterios y condiciones de uso de la página web:
          <a
            href={'www.huellapositiva.com/'}
            className={'linksContext'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            huellapositiva.com
          </a>
        </p>
      </section>
    </article>
  );
};
