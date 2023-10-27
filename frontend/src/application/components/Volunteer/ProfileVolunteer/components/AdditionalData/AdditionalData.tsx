import React from 'react';
import './AdditionalData.scss';
import { FieldForm } from '../../../../Forms/FieldForm';
import { TextAreaForm } from '../../../../Forms/TextAreaForm/TextAreaForm';
import { CheckInterface } from '../../types';

interface AdditionalDataProps {
  additionalDataChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  throwMessage: { [key: string]: string };
  validate: CheckInterface;
}

export const AdditionalData = ({
  additionalDataChange,
  throwMessage,
  validate,
}: AdditionalDataProps) => {
  const onChangeData =
    () => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
      additionalDataChange(event);
    };

  return (
    <article className="AdditionalData">
      <header className={'additionalDataTitle'}>
        <h2>Información adicional</h2>
      </header>
      <article className={'socialNetworks'}>
        <FieldForm
          title="Twitter"
          name="twitter"
          type="url"
          stateValidate={validate.twitter}
          onChange={onChangeData()}
          messageInfoUser={throwMessage.twitter}
        />
        <FieldForm
          title="LinkedIn"
          name="linkedin"
          type="url"
          stateValidate={validate.linkedin}
          onChange={onChangeData()}
          messageInfoUser={throwMessage.linkedin}
        />
        <FieldForm
          title="Instagram"
          name="instagram"
          type="url"
          stateValidate={validate.instagram}
          onChange={onChangeData()}
          messageInfoUser={throwMessage.instagram}
        />
        <TextAreaForm
          title="Información de interés"
          name="information"
          rows={16}
          cols={3}
          placeholder="Información de interés"
          onChange={onChangeData()}
          messageInfoUser={throwMessage.additionalInformation}
        />
      </article>
    </article>
  );
};
