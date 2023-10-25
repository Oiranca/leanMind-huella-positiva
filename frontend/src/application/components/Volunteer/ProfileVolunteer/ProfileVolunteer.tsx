import React, { useState } from 'react';
import './ProfileVolunteer.scss';
import { PersonalData } from './components/PersonalData/PersonalData';
import { AddressData } from './components/AddressData/AddressData';
import { AdditionalData } from './components/AdditionalData/AdditionalData';
import { useCorrectFormat } from '../../../../infrastructure/hooks/useCorrectFormat';
import { profileService } from '../../../../domain/services/Profile.service';
import { SubmitButton } from '../../../../infrastructure/view/components/atoms/SubmitButton';
import profile_example from '../ProfileVolunteer/assets/profile_example.svg';

export const ProfileVolunteer: React.FC<{}> = () => {
  const { check, messageInfoUser, data, setInputValue, setNameEvent } =
    useCorrectFormat();
  const [cvButtonClass, setCvButtonClass] = useState('cv-button');

  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    changeEvent.preventDefault();
    setCvButtonClass('cv-button uploaded');
    setInputValue(changeEvent.target.value);
    setNameEvent(changeEvent.target.name);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    profileService.editProfile(data);
  };

  return (
    <form className={'ProfileVolunteer'} onSubmit={handleSubmit}>
      <header>
        <section className={'profileImage'}>
          <label>
            <img src={profile_example} alt="Profile image" />
            <input type="file" />
          </label>
        </section>
      </header>
      <section>
        <PersonalData
          personalDataChange={handleChange}
          throwMessage={messageInfoUser.name}
          validate={check}
        />
        <AddressData />
        <AdditionalData />
      </section>
      <section className="profileVolunteerButtons">
        <div className={'curriculumButton'}>
          <label className={cvButtonClass}>
            <input type="file" onChange={handleChange} />
            Adjuntar CV
          </label>
        </div>
        <div className={'submitButton'}>
          <SubmitButton text="Actualizar perfil" />
        </div>
      </section>
    </form>
  );
};

ProfileVolunteer.displayName = 'ProfileVolunteer';
