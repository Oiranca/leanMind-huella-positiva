import React from 'react';
import { FormRadio } from '../../../../../infrastructure/view/components/molecules/FormRadio';
import { LinkText } from '../../../../../infrastructure/view/components/atoms/LinkText';
import './Assent.scss';

export const Assent: React.FC<{}> = () => {
  return (
    <article className={'Assent'}>
      <header>
        <h1>Consentimientos</h1>
      </header>
        <section className={'isAssent'}>
          <FormRadio
            title={'Política Privacidad'}
            type={'checkbox'}
            name={'Política Privacidad'}
            value={''}
            checked={false}
          />
          <p>
            Estoy de acuerdo de con la
            <LinkText to={'/'} text={'Política de privacidad'} />.
          </p>
        </section>
        <section className={'isAssent'}>
          <FormRadio
            title={'Protección de datos'}
            type={'checkbox'}
            name={'Proteccion de datos'}
            value={''}
            checked={false}
          />
          <p>
            Estoy de acuerdo de con la
            <LinkText to={'/'} text={'Política de protección de datos'} />.
          </p>
        </section>
    </article>
  );
};
