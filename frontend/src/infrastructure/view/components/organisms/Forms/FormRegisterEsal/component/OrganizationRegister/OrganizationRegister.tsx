import React from 'react';
import { FormRadio } from '../../../../../molecules/FormRadio';
import superHeroes from '../../../../../atoms/Image/assets/superHeroes.svg';
import './OrganizationRegister.scss';
import { FieldForm } from '../../../../../../../../application/components/Forms/FieldForm';
import { TextAreaForm } from '../../../../../../../../application/components/Forms/TextAreaForm/TextAreaForm';

export const ISLAND: string[] = [
  'Gran Canaria',
  'Fuerteventura',
  'Lanzarote',
  'La Graciosa',
  'Tenerife',
  'La Palma',
  'La Gomera',
  'El Hierro',
];
export const ASSOCIATIONTYPE: string[] = [
  'Asociacion',
  'Fundación',
  'Club Deportivo',
  'Colegio Profesional',
  'Federación Deportiva',
];

export const OrganizationRegister: React.FC<{}> = () => {
  return (
    <article className={'OrganizationRegister'}>
      <header className={'organizationRegisterTitle'}>
        <h1>Datos Entidad</h1>
      </header>
      <section className={'organizationRegisterData'}>
        <FieldForm title={'Nombre entidad *'} type={'text'} name={'Entidad'} />
        <FieldForm title={'Página web'} type={'text'} name={'Web'} />
        <FieldForm title={'Código postal *'} type={'text'} name={'zipcode'} />
        <section className={'islands'}>
          <header>
            <p>Ubicación *</p>
          </header>
          <section className={'islandData'}>
            {ISLAND.map((islands, index) => {
              return (
                <FormRadio
                  title={''}
                  type={'radio'}
                  name={islands}
                  value={islands}
                  checked={false}
                  key={index}
                />
              );
            })}
          </section>
        </section>

        <TextAreaForm
          title={'Descripción *'}
          name={'Descripcion'}
          placeholder={'Breve descripción de la entidad'}
          rows={12}
          cols={2}
        />

        <section className={'logo'}>
          <header>
            <p>Logo *</p>
          </header>
          <label>
            <input type="file" className={'file'} />
            <img
              src={superHeroes}
              alt={'super heroes logo register'}
              className={'logoImage'}
            />
          </label>
        </section>
        <section className={'associations'}>
          <header>
            <p>Tipo de entidad *</p>
          </header>
          <section className={'associationData'}>
            {ASSOCIATIONTYPE.map((types, index) => {
              return (
                <FormRadio
                  title={''}
                  type={'radio'}
                  name={types}
                  value={types}
                  checked={false}
                  key={index}
                />
              );
            })}
          </section>
        </section>
        <section className={'isRegister'}>
          <header>
            <p>Registrada como entidad de voluntariado en el Gobierno de Canarias *</p>
          </header>
          <span className={'selectorIsRegister'}>
            <FormRadio
              title={''}
              type={'checkbox'}
              name={'Affirmative'}
              value={'Sí'}
              checked={false}
            />
            <FormRadio
              title={''}
              type={'checkbox'}
              name={'Negative'}
              value={'No'}
              checked={false}
            />
          </span>
        </section>
      </section>
    </article>
  );
};
