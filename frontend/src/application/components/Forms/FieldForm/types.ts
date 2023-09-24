export interface FieldFormProps {
  title: string;
  messageInfoUser?: string;
  type: inputTypes | string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
  onBlur?: any;
  stateValidate?: stateValidateTypes;
  checked?: boolean;
  disabled?: disableType;
}

export type inputTypes = 'email' | 'password' | 'text' | 'radio' | 'checkbox';
export type stateValidateTypes = '' | 'correct' | 'incorrect';
export type disableType = true | false;
