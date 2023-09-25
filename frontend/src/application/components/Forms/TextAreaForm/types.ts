import React from 'react';

export interface TextAreaFormProps {
  name: string;
  value?: string;
  placeholder: string;
  rows?: number;
  cols?: number;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => string | void;
  onBlur?: any;
  maxlength?: number;
  wrap?: wrapSpecifies;
  title: string;
  messageInfoUser?: string;
}

export type wrapSpecifies = 'hard' | 'soft';
