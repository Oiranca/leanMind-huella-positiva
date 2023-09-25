import { TextAreaFormProps } from './types';
import React from 'react';
import './TextAreaForm.scss';

export const TextAreaForm: React.FC<TextAreaFormProps> = ({
  name = '',
  title = '',
  placeholder,
  rows,
  cols,
  value,
  maxlength,
  wrap,
  onBlur,
  onChange,
  readonly,
  messageInfoUser,
}) => {
  return (
    <div className="TextAreaForm">
      <label htmlFor={name}>{title}</label>
      <textarea className={'inputTextArea'}
        name={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        wrap={wrap}
        readOnly={readonly}
        maxLength={maxlength}
      />
    </div>
  );
};
