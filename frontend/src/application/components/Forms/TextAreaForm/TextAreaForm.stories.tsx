import * as React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import {TextAreaForm} from './TextAreaForm';

export default {
    title: 'TextAreaForm',
    decorators: [withA11y],
};

export const withText = () => <TextAreaForm title={'text area'} name="Input Text Area" placeholder="Input Text area" />;
