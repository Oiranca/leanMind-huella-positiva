import React from 'react';
import { FieldForm } from '../../../../Forms/FieldForm';
import { useCorrectFormat } from '../../../../../../infrastructure/hooks/useCorrectFormat';
import { profileService } from '../../../../../../domain/services/Profile.service';
import './PersonalData.scss';

export const PersonalData: React.FC<{}> = () => {
  const { check, data, messageInfoUser, setInputValue, setNameEvent } =
    useCorrectFormat();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    profileService.editProfile(data);
  };
  return (
    <form className="PersonalData" onSubmit={handleSubmit}>
      <header className={'personalDataTitle'}>
        <h2>Información personal</h2>
      </header>
      <section className={'information'}>
        <FieldForm
          title="Nombre"
          name="name"
          type="text"
          stateValidate={check.name}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.name}
        />
        <FieldForm
          title="Apellidos"
          name="surname"
          type="text"
          stateValidate={check.surname}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.surname}
        />
        <FieldForm
          title="Fecha de nacimiento"
          name="birthday"
          type="date"
          stateValidate={check.birthDate}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.birthDate}
        />
        <FieldForm
          title="Email"
          name="email"
          type="email"
          stateValidate={check.email}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.email}
        />
        <FieldForm
          title="Teléfono"
          name="phoneNumber"
          type="text"
          stateValidate={check.phoneNumber}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.phoneNumber}
        />
      </section>
    </form>
  );
};
