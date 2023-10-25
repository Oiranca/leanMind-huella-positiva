import React from 'react';
import { FormSelect } from '../../../../Forms/FormSelect';
import { FieldForm } from '../../../../Forms/FieldForm';
import { useCorrectFormat } from '../../../../../../infrastructure/hooks/useCorrectFormat';
import './AddressData.scss';
import { CheckInterface } from '../../types';

interface AddressDataDataProps {
  addressDataChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  throwMessage: { [key: string]: string };
  validate: CheckInterface;
}

export const AddressData = ({
  addressDataChange,
  throwMessage,
  validate,
}: AddressDataDataProps) => {
  const { data, town } = useCorrectFormat();
  const onChangeData = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    addressDataChange(event);
  };

  return (
    <article className={'AddressData'}>
      <header className={'addressDataTitle'}>
        <h2>Localización</h2>
      </header>
      <section className={'localization'}>
        <FieldForm
          title="Provincia"
          name="province"
          type="text"
          value={data.province}
          stateValidate={validate.province}
          onChange={addressDataChange}
          messageInfoUser={throwMessage.province}
          disabled={true}
        />
        <FieldForm
          title="Isla"
          name="island"
          type="text"
          stateValidate={validate.island}
          disabled={true}
          value={data.island}
        />
        <FieldForm
          title="Código Postal"
          name="zipcode"
          type="text"
          stateValidate={validate.zipCode}
          onChange={onChangeData()}
          messageInfoUser={validate.zipCode}
        />
        <FieldForm
          title="Dirección"
          name="address"
          type="text"
          stateValidate={validate.address}
          onChange={onChangeData()}
          messageInfoUser={validate.address}
        />

        <FormSelect
          name={'town'}
          optionsList={town}
          text={'Ciudad'}
          onChange={onChangeData}
        />
      </section>
    </article>
  );
};
