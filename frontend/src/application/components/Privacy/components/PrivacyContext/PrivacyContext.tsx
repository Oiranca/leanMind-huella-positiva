import React from 'react';
import './PrivacyContext.scss';

export const PrivacyContext: React.FC = () => {
  return (
    <article className={'PrivacyContext'}>
      <section>
        <header>
          <h3> INFORMACIÓN Y CONSENTIMIENTO </h3>
        </header>
        <section>
          <p>
            Mediante la lectura de la presente Política de Privacidad, el usuario queda
            informado sobre la forma en la que Soy Mamut recaba, trata y protege los datos
            de carácter personal que le son facilitados a través de los formularios
            dispuestos a través del sitio web
            <a
              href={'https://huellapositiva.com/'}
              className={'linksContext'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              HuellaPositiva
            </a>
            (en adelante, el <span className={'boldText'}> “Sitio Web”</span>), así como
            los datos derivados de su navegación y aquellos otros datos que pueda
            facilitar en un futuro a Soy Mamut. El usuario debe leer con atención esta
            Política de Privacidad, que ha sido redactada de forma clara y sencilla, para
            facilitar su comprensión, determinando libre y voluntariamente si desea
            facilitar sus datos personales a Soy Mamut.
          </p>
        </section>
      </section>

      <section>
        <header>
          <h3>OBLIGATORIEDAD DE FACILITAR LOS DATOS</h3>
        </header>
        <section>
          <p>
            Los datos solicitados en los formularios dispuestos en el Sitio Web son, con
            carácter general, obligatorios (salvo que en el campo requerido se especifique
            lo contrario) para cumplir con las finalidades establecidas. Por lo tanto, si
            no se facilitan dichos datos o estos no son correctos no podrán atenderse las
            mismas.
          </p>
        </section>
      </section>
      <section>
        <header>
          <h3>LEGITIMACIÓN DEL TRATAMIENTO DE SUS DATOS</h3>
        </header>
        <section>
          <p>
            El tratamiento de datos para la adquisición de productos por medio del Sitio
            Web será necesario para el cumplimiento de la relación contractual surgida
            entre el usuario y Soy Mamut. El tratamiento de sus datos con fines de
            marketing, relativo a bienes y servicios propios de Soy Mamut y servicios
            análogos para sus clientes, se basará en el interés legítimo reconocido por la
            normativa cuando el usuario haya adquirido bienes y/o servicios de Soy Mamut.
            En caso no existir tal relación contractual, el tratamiento de datos se basará
            en el consentimiento del usuario recogido en la normativa actual vigente. El
            tratamiento para las referidas finalidades, se realizará siempre previo
            consentimiento del usuario o en base al referido interés legítimo, y será
            necesario para la atención de su solicitud. Asimismo, en caso de retirar su
            consentimiento a cualquiera de los tratamientos, ello no afectará a la licitud
            de los tratamientos efectuados con anterioridad. Para revocar dicho
            consentimiento, el Usuario podrá contactar con Soy Mamut a través de los
            canales siguientes: mediante carta dirigida al Departamento de Protección de
            Datos de Soy Mamut a la dirección Calle Viñátigo nº11, Visvique, Arucas. Las
            Palmas (Islas Canarias) CP 35412 o bien mediante correo electrónico dirigido a
            <span className={'boldText'}>hola@huellapositiva.com</span>
          </p>
        </section>
      </section>
      <section>
        <header>
          <h3>COOKIES, SERVICIOS DE ANÁLISIS WEB Y REDES SOCIALES</h3>
        </header>
        <section>
          <p>
            Utilizamos cookies, servicios de análisis web y complementos de redes sociales
            en nuestro sitio web para mejorar tu experiencia de navegación.
            <a
              href={'/cookies-policy/'}
              className={'linksContext'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              Consulta nuestra política de cookies
            </a>
          </p>
        </section>
      </section>
      <section>
        <header>
          <h3>MEDIDAS DE SEGURIDAD.</h3>
        </header>
        <section>
          <p>
            Soy Mamut tratará los datos del Usuario en todo momento de forma absolutamente
            confidencial y guardando el secreto de los mismos, de conformidad con lo
            previsto en la normativa de aplicación, adoptando al efecto las medidas de
            índole técnico-organizativa necesarias que garanticen la seguridad de sus
            datos y eviten su alteración, pérdida, tratamiento o acceso no autorizado,
            habida cuenta del estado de la tecnología, la naturaleza de los datos
            almacenados y los riesgos a que están expuestos.
          </p>
        </section>
      </section>

      <section>
        <header>
          <h3>RESPONSABILIDAD DEL USUARIO.</h3>
        </header>
        <section>
          <p>El usuario:</p>
          <ul>
            <li>
              Garantiza que es mayor de dieciocho (18) años y que los datos que facilita a
              Soy Mamut son verdaderos, exactos, completos y actualizados. A estos
              efectos, el usuario responde de la veracidad de todos los datos que
              comunique y mantendrá convenientemente actualizada la información
              facilitada, de tal forma que responda a su situación real.
            </li>
            <li>
              Garantiza que ha informado a los terceros de los que facilite sus datos, en
              caso de hacerlo, de los aspectos contenidos en este documento. Asimismo,
              garantiza que ha obtenido su autorización para facilitar sus datos a Soy
              Mamut para los fines señalados.
            </li>
            <li>
              Será responsable de las informaciones falsas o inexactas que proporcione a
              través del Sitio Web y de los daños y perjuicios, directos o indirectos, que
              ello cause a Soy Mamut o a terceros.
            </li>
          </ul>
        </section>
      </section>

      <section>
        <header>
          <h3>CAMBIOS DE LA POLÍTICA DE PRIVACIDAD.</h3>
        </header>
        <section>
          <p>
            El usuario puede enviar un escrito a Soy Mamut, a la dirección indicada en el
            encabezado de la presente Política, o bien por medio de un correo electrónico
            a la dirección<span className={'boldText'}>hola@huellapositiva.com</span>,
            adjuntando fotocopia de su documento de identidad, en cualquier momento y de
            manera gratuita, para:
          </p>
          <ul>
            <li>Revocar los consentimientos otorgados.</li>
            <li>
              Obtener confirmación acerca de si en Soy Mamut se están tratando datos
              personales que conciernen al Usuario o no.
            </li>
            <li>Acceder a sus datos personales.</li>
            <li>Rectificar los datos inexactos o incompletos.</li>
            <li>
              Solicitar la supresión de sus datos cuando, entre otros motivos, los datos
              ya no sean necesarios para los fines que fueron recogidos.
            </li>
            <li>
              Obtener de Soy Mamut la limitación del tratamiento de los datos cuando se
              cumpla alguna de las condiciones previstas en la normativa de protección de
              datos.
            </li>
            <li>
              Obtener intervención humana, a expresar tu punto de vista y a impugnar las
              decisiones automatizadas a adoptadas por parte de Soy Mamut.
            </li>
            <li>Solicitar la portabilidad de tus datos.</li>
            <li>
              Ponerse en contacto con el DPO de Soy Mamut a través de la siguiente
              dirección<span className={'boldText'}>hola@huellapositiva.com</span>
            </li>
            <li>
              Interponer una reclamación relativa a la protección de sus datos personales
              cuando el interesado considere que Soy Mamut ha vulnerado los derechos que
              le son reconocidos por la normativa aplicable en protección de dato.
            </li>
          </ul>
          <p>
            Para garantizar que nuestras directrices de protección de datos cumplan
            siempre con los requisitos legales actuales, nos reservamos el derecho de
            realizar cambios para estar siempre adecuados a la legislación vigente.{' '}
          </p>
        </section>
      </section>
    </article>
  );
};
