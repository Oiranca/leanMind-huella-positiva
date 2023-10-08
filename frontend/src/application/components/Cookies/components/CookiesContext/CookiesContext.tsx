import React from 'react';
import './CookiesContext.scss';
export const CookiesContext: React.FC = () => {
  return (
    <article className={'CookiesContext'}>
      <section>
        <header>
          <h2>Cookies utilizadas en esta web</h2>
        </header>
        <p>
          Siguiendo las directrices de la Agencia Española de Protección de Datos
          procedemos a detallar el uso de cookies que hace esta web con el fin de
          informarle con la máxima exactitud posible.
        </p>
      </section>
      <section>
        <header>
          <h3>Cookies propias</h3>
        </header>
        <ul>
          <li>
            <span className={'boldText'}> Cookies de sesión :</span> Para garantizar que
            los usuarios que escriban comentarios en el blog sean humanos y no
            aplicaciones automatizadas. De esta forma se combate el spam.
          </li>
        </ul>
      </section>

      <section>
        <header>
          <h3>Cookies de terceros</h3>
        </header>
        <ul>
          <li>
            <span className={'boldText'}>Google Analytics:</span> Almacena cookies para
            poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web.
            Al utilizar este sitio web está consintiendo el tratamiento de información
            acerca de usted por Google. Por tanto, el ejercicio de cualquier derecho en
            este sentido deberá hacerlo comunicando directamente con Google.
          </li>
          <li>
            <span className={'boldText'}>Redes sociales:</span> Cada red social utiliza
            sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta
            o Compartir.
          </li>
        </ul>
      </section>
      <section>
        <header>
          <h2>Desactivación o eliminación de cookies</h2>
        </header>
        <p>
          En cualquier momento podrá ejercer su derecho de desactivación o eliminación de
          cookies de este sitio web. Estas acciones se realizan de forma diferente en
          función del navegador que esté usando.
          <a
            href={'http://soymamut.com/mas-informacion-sobre-las-cookies/#navegadores/'}
            className={'linksContext'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            Aquí le dejamos una guía rápida para los navegadores más populares.
          </a>
        </p>
      </section>
    </article>
  );
};
