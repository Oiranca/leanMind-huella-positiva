import React from 'react';
import { FieldForm } from '../../../../Forms/FieldForm';
import './PersonalData.scss';
import { CheckInterface } from '../../types';

interface PersonalDataProps {
  personalDataChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  throwMessage: string;
  validate: CheckInterface;
}

export const PersonalData = ({
  personalDataChange,
  throwMessage,
  validate,
}: PersonalDataProps) => {
  const getOnChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    personalDataChange(event);
  };

  return (
    <article className="PersonalData">
      <header className={'personalDataTitle'}>
        <h2>Información personal</h2>
      </header>
      <section className={'information'}>
        <FieldForm
          title="Nombre"
          name="name"
          type="text"
          stateValidate={validate.name}
          onChange={getOnChange()}
          messageInfoUser={throwMessage}
        />
        <FieldForm
          title="Apellidos"
          name="surname"
          type="text"
          stateValidate={validate.surname}
          onChange={getOnChange()}
          messageInfoUser={throwMessage}
        />
        <FieldForm
          title="Fecha de nacimiento"
          name="birthday"
          type="date"
          stateValidate={validate.birthDate}
          onChange={getOnChange()}
          messageInfoUser={throwMessage}
        />
        <FieldForm
          title="Email"
          name="email"
          type="email"
          stateValidate={validate.email}
          onChange={getOnChange()}
          messageInfoUser={throwMessage}
        />
        <FieldForm
          title="Teléfono"
          name="phoneNumber"
          type="text"
          stateValidate={validate.phoneNumber}
          onChange={getOnChange()}
          messageInfoUser={throwMessage}
        />
      </section>
    </article>
  );
};
