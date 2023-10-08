import React from 'react';
import './PrivacyCompanyID.scss';

export const PrivacyCompanyID: React.FC<{}> = () => {
  return (
    <article className={'PrivacyCompanyID'}>
      <header>
        <h3> IDENTIFICAICÓN </h3>
      </header>
      <section>
        <ul>
          <li>
            <span className={'boldText'}>Titular:</span>Asociación Cultural Soy Mamut (en
            adelante, "Soy Mamut").
          </li>
          <li>
            <span className={'boldText'}>CIF:</span>G76244565
          </li>
          <li>
            <span className={'boldText'}>Domicilio Social :</span>Calle Viñátigo nº11,
            Visvique, Arucas. Las Palmas (Islas Canarias) CP 35412
          </li>
          <li>
            <span className={'boldText'}>Email :</span>hola@huellapositiva.com
          </li>
        </ul>
        <p>
          El usuario puede contactar con el Delegado de Protección de Datos mediante
          escrito dirigido al domicilio a Soy Mamut a la atención del "Delegado de
          Protección de Datos" o al correo electrónico
          <span className={'boldText'}>hola@huellapositiva.com</span>.
        </p>
      </section>
    </article>
  );
};
