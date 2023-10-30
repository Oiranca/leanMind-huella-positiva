import React from 'react';
import { FieldForm } from '../../../../Forms/FieldForm';
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
          stateValidate={validate.province}
          onChange={onChangeData()}
          messageInfoUser={throwMessage.province}
        />
        <FieldForm
          title="Isla"
          name="island"
          type="text"
          stateValidate={validate.island}
          onChange={onChangeData()}
          messageInfoUser={throwMessage.island}
        />
        <FieldForm
          title="Código Postal"
          name="zipcode"
          type="text"
          stateValidate={validate.zipCode}
          onChange={onChangeData()}
          messageInfoUser={throwMessage.zipCode}
        />
        <FieldForm
          title="Dirección"
          name="address"
          type="text"
          stateValidate={validate.address}
          onChange={onChangeData()}
          messageInfoUser={throwMessage.address}
        />
        <FieldForm
          title="Ciudad"
          name="town"
          type="text"
          stateValidate={validate.town}
          onChange={onChangeData()}
          messageInfoUser={throwMessage.town}
        />
      </section>
    </article>
  );
};
