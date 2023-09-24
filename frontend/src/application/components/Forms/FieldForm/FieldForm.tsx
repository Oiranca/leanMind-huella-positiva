import React from 'react';
import { FieldFormProps } from './types';
import './FieldForm.scss';

export const FieldForm: React.FC<FieldFormProps> = ({
  title,
  disabled,
  name,
  value,
  onChange,
  onBlur,
  stateValidate = '',
  messageInfoUser,
  type,
}) => {
  return (
    <div className="FieldFormVolunteer">
      <label htmlFor={name} className={'LabelFormVolunteer'}>
        {title}
      </label>

      <input
        className={`InputFieldForm ${stateValidate}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      {stateValidate === 'incorrect' && (
        <p aria-label={'message-error'}>{messageInfoUser}</p>
      )}
    </div>
  );
};

FieldForm.displayName = 'FieldForm';
