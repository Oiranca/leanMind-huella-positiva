import React from 'react';
import './FooterCookies.scss';

export const FooterCookies: React.FC = () => {
  return (
    <article className={'FooterCookies'}>
      <header>
        <h2>Notas adicionales</h2>
      </header>
      <section>
        <ul>
          <li>
            Ni esta web ni sus representantes legales se hacen responsables ni del
            contenido ni de la veracidad de las políticas de privacidad que puedan tener
            los terceros mencionados en esta política de cookies.
          </li>
          <li>
            Los navegadores web son las herramientas encargadas de almacenar las cookies y
            desde este lugar debe efectuar su derecho a eliminación o desactivación de las
            mismas. Ni esta web ni sus representantes legales pueden garantizar la
            correcta o incorrecta manipulación de las cookies por parte de los mencionados
            navegadores.
          </li>
          <li>
            En algunos casos es necesario instalar cookies para que el navegador no olvide
            su decisión de no aceptación de las mismas.
          </li>
          <li>
            En el caso de las cookies de Google Analytics, esta empresa almacena las
            cookies en servidores ubicados en Estados Unidos y se compromete a no
            compartirla con terceros, excepto en los casos en los que sea necesario para
            el funcionamiento del sistema o cuando la ley obligue a tal efecto. Según
            Google no guarda su dirección IP. Google Inc. es una compañía adherida al
            Acuerdo de Puerto Seguro que garantiza que todos los datos transferidos serán
            tratados con un nivel de protección acorde a la normativa europea. Puede
            consultar información detallada a este respecto{' '}
            <a
              href={'http://safeharbor.export.gov/companyinfo.aspx?id=16626'}
              className={'linksContext'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              en este enlace.
            </a>
            Si desea información sobre el uso que Google da a las cookies
            <a
              href={
                'https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es&csw=1'
              }
              className={'linksContext'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              le adjuntamos este otro enlace.
            </a>
          </li>
          <li>
            Para cualquier duda o consulta acerca de esta política de cookies no dude en
            comunicarse con nosotros a través de la sección de contacto.
          </li>
        </ul>
      </section>
    </article>
  );
};
