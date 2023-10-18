import React from 'react';
import { Image } from '../../../../../../infrastructure/view/components/atoms/Image';
import profile_example from '../../../../../../infrastructure/view/components/organisms/Forms/MixModifyUserForm/assets/profile_example.svg';
import { FieldForm } from '../../../../../../infrastructure/view/components/molecules/FieldForm';
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
      <header>
        <section className={'profileTitle'}>
          <h2>Información personal</h2>
        </section>
        <section className={'profileImage'}>
          <label>
            <Image source={profile_example} description="Profile image" />
            <input type="file" />
          </label>
        </section>
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
      </section>
      <section className={'contact'}>
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
      </section>
    </form>
  );
};
