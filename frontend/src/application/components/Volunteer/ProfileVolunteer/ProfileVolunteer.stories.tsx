import React from 'react';
import {ProfileVolunteer} from './ProfileVolunteer';
import {withA11y} from '@storybook/addon-a11y';

export default {
    title: 'Pages | ProfileVolunteer',
    decorators: [withA11y],
};

export const Default = () => <ProfileVolunteer/>;