import React from 'react';
import cookie from '../../assets/cookie.svg';
import './HeaderCookiesPolicy.scss';

export const HeaderCookiesPolicy: React.FC = () => {
  return (
    <article className={'HeaderCookiesPolicy'}>
      <header>
        <h1>Política de cookies</h1>
      </header>
      <section className={'headerBody'}>
        <img
          className={'cookieImage'}
          src={cookie}
          alt={'Imagen de una galleta mordida'}
        />
        <section className={'headerText'}>
          <p>
            Una cookie es un pequeño fichero de texto que se almacena en su navegador
            cuando visita casi cualquier página web. Su utilidad es que la web sea capaz
            de recordar su visita cuando vuelva a navegar por esa página. Las cookies
            suelen almacenar información de carácter técnico, preferencias personales,
            personalización de contenidos, estadísticas de uso, enlaces a redes sociales,
            acceso a cuentas de usuario, etc. El objetivo de la cookie es adaptar el
            contenido de la web a su perfil y necesidades, sin cookies los servicios
            ofrecidos por cualquier página se verían mermados notablemente. Si desea
            consultar más información sobre qué son las cookies, qué almacenan, cómo
            eliminarlas, desactivarlas, etc...,
            <a
              href={'https://soymamut.com/mas-informacion-sobre-las-cookies/'}
              className={'linksContext'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              le rogamos se dirija a este enlace.
            </a>
          </p>
        </section>
      </section>
    </article>
  );
};
