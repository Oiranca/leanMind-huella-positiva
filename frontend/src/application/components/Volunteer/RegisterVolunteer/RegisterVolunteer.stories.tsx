import * as React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { RegisterVolunteer as Register } from './RegisterVolunteer';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Organisms | Forms ',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const RegisterVolunteer = () => <Register />;