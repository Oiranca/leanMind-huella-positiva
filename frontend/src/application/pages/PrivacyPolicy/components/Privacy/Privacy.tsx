import * as React from 'react';
import lock from '../../assets/img/lock.svg';
import './Privacy.scss';

export const Privacy: React.FC<{}> = () => {
  return (
    <article className="Privacy">
      <header>
        <h1>Política de privacidad</h1>
      </header>
      <section className={'objectives'}>
        <img className={'lockImage'} src={lock} alt={'Imagen de un candado'} />
        <section className={'objectivesText'}>
          <p>
            <span className={'boldText'}>
              Nuestro objetivo es que te sientas cómodo en nuestro sitio web y por lo
              tanto la protección de tu privacidad es muy importante para nosotros.
            </span>
            Por eso nos gustaría pedirte que leas detenidamente el siguiente resumen sobre
            cómo funciona nuestro sitio web. Puedes confiar en un procesamiento de datos
            transparente y justo ya que nos esforzamos día a día para manejar tus datos de
            forma segura, cuidadosa y responsable.
          </p>
          <p>
            Las siguientes políticas de privacidad están destinadas a informarte sobre
            cómo usamos tu información personal cumpliendo con las disposiciones y
            requisitos del Reglamento General Europeo de Protección de Datos. Las
            siguientes políticas de privacidad están destinadas a informarte sobre cómo
            usamos tu información personal cumpliendo con las disposiciones y requisitos
            del Reglamento General Europeo de Protección de Datos.
          </p>
        </section>
      </section>
    </article>
  );
};
