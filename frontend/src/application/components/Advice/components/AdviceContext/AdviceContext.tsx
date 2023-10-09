import React from 'react';
import './AdviceContext.scss';

export const AdviceContext: React.FC<{}> = () => {
  return (
    <article className={'AdviceContext'}>
      <section>
        <p>
          Al navegar por este sitio web el navegante adquiere la condición de usuario; el
          usuario acepta las condiciones de uso planteadas,
          <span className={'boldText'}>Soy Mamut</span>, se reserva el derecho a modificar
          en cualquier momento sus condiciones legales, así como a realizar cualquier
          mejora técnica o visual que considere oportuno; si las modificaciones afectan a
          la privacidad de los usuarios, se avisará con antelación a la entrada en vigor
          de los cambios.
        </p>
        <p>
          En cumplimiento Ley Orgánica de Protección de Datos Personales y Garantía de los
          Derechos Digitales (LOPD-GDD 3/2018) y con el Reglamento General de Protección
          de Datos (RGPD UE 2016/679) para poder atender sus consultas, cumplimente los
          campos obligatorios. No se ceden datos a terceros salvo obligación legal o en el
          supuesto que sea necesario para atender su solicitud, en caso de cambios y
          modificaciones en sus datos deberá comunicarlo. Pueden ejercitar sus derechos de
          acceso, rectificación, supresión, limitación, oposición y portabilidad a la
          siguiente dirección: Calle Viñátigo nº11, Visvique, Arucas. Las Palmas (Islas
          Canarias) CP 35412.
        </p>
      </section>
      <section>
        <header>
          <h2>Política de enlaces</h2>
          <p>
            En esta web se han establecido enlaces a páginas de terceros con el fin de
            facilitar a los usuarios en acceso a distintas redes sociales y plataformas de
            internet. <span className={'boldText'}>Soy Mamut no se hace responsable</span>
            de los contenidos, ofertas, productos o servicios que pudieran encontrarse.
          </p>
        </header>
      </section>
      <section>
        <header>
          <h3>Legislación aplicable</h3>
          <p>
            Lo referente a Soy Mamut, y el usuario se llevará a cabo dentro de la
            normativa nacional vigente y cualquier controversia se sustanciará a través de
            los Juzgados y Tribunales de Las Palmas de Gran Canaria.
          </p>
        </header>
      </section>
    </article>
  );
};
