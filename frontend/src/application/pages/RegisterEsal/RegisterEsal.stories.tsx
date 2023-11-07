import React from 'react';
import { RegisterEsal } from './RegisterEsal';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Organisms | Forms',
  decorators: [withA11y],
};

export const EsalRegister = () => <RegisterEsal />;
