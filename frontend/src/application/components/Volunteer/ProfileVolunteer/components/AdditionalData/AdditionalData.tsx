import React from 'react';
import { profileService } from '../../../../../../domain/services/Profile.service';
import { useCorrectFormat } from '../../../../../../infrastructure/hooks/useCorrectFormat';
import './AdditionalData.scss';
import { FieldForm } from '../../../../Forms/FieldForm';
import { TextAreaForm } from '../../../../Forms/TextAreaForm/TextAreaForm';

export const AdditionalData: React.FC<{}> = () => {
  const { check, data, messageInfoUser, setInputValue, setNameEvent } =
    useCorrectFormat();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    profileService.editProfile(data);
  };
  return (
    <form className="AdditionalData" onSubmit={handleSubmit}>
      <header className={'additionalDataTitle'}>
        <h2>Información adicional</h2>
      </header>
      <article className={'socialNetworks'}>
        <FieldForm
          title="Twitter"
          name="twitter"
          type="url"
          stateValidate={check.twitter}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.twitter}
        />
        <FieldForm
          title="LinkedIn"
          name="linkedin"
          type="url"
          stateValidate={check.linkedin}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.linkedin}
        />
        <FieldForm
          title="Instagram"
          name="instagram"
          type="url"
          stateValidate={check.instagram}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.instagram}
        />
        <TextAreaForm
          title="Información de interés"
          name="information"
          rows={16}
          cols={3}
          placeholder="Información de interés"
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.additionalInformation}
        />
      </article>
    </form>
  );
};
