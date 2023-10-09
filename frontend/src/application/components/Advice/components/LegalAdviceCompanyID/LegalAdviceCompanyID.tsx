import React from 'react';
import './LegalAdviceCompanyID.scss';

export const LegalAdviceCompanyID: React.FC<{}> = () => {
  return (
    <article className={'LegalAdviceCompanyID'}>
      <header>
        <h2>Datos del titular</h2>
      </header>
      <section>
        <p>
          Según lo establecido en la ley de Sociedad de la información y comercio
          electrónico, LSSICE 34/2002, Soy Mamut, pone a disposición los datos del titular
          de la presente página web.
        </p>
      </section>
      <section className={'companyID'}>
        <section>
          <ul>
            <li>
              <h3>Denominación social</h3>
              <p>
                Asociación cultural, en adelante,
                <a
                  href={'https://soymamut.com'}
                  className={'linksContext'}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  Soy Mamut
                </a>
              </p>
            </li>
            <li>
              <h3>Denominación comercial</h3>
              <p>Soy Mamut</p>
            </li>
            <li>
              <h3>CIF</h3>
              <p>G76244565</p>
            </li>
            <li>
              <h3>Correo electrónico</h3>
              <p>huellapositiva@SoyMamut.com</p>
            </li>
            <li>
              <h3>Dirección</h3>
              <p>
                Calle Viñátigo nº11, Visvique, Arucas. Las Palmas (Islas Canarias) CP
                35412.
              </p>
            </li>
          </ul>
        </section>
      </section>

    </article>
  );
};
