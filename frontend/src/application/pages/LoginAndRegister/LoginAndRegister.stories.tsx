import * as React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';
import { LoginAndRegister } from './LoginAndRegister';

export default {
  title: 'Pages ',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const mixForms = () => <LoginAndRegister />;
