import React from 'react';
import { FormSelect } from '../../../../Forms/FormSelect';
import { FieldForm } from '../../../../Forms/FieldForm';
import { useCorrectFormat } from '../../../../../../infrastructure/hooks/useCorrectFormat';
import './AddressData.scss';

export const AddressData: React.FC<{}> = () => {
  const { check, data, town, messageInfoUser, setInputValue, setNameEvent } =
    useCorrectFormat();

  return (
    <form className={'AddressData'}>
      <header className={'addressDataTitle'}>
        <h2>Localización</h2>
      </header>
      <section className={'localization'}>
        <FieldForm
          title="Provincia"
          name="province"
          type="text"
          value={data.province}
          disabled={true}
        />
        <FieldForm
          title="Isla"
          name="island"
          type="text"
          stateValidate={check.island}
          disabled={true}
          value={data.island}
        />
        <FieldForm
          title="Código Postal"
          name="zipcode"
          type="text"
          stateValidate={check.zipCode}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.zipCode}
        />
        <FieldForm
          title="Dirección"
          name="address"
          type="text"
          stateValidate={check.address}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
          messageInfoUser={messageInfoUser.address}
        />

        <FormSelect
          name={'town'}
          optionsList={town}
          text={'Ciudad'}
          onChange={(e) => {
            setInputValue(e.target.value);
            setNameEvent(e.target.name);
          }}
        />
      </section>
    </form>
  );
};
