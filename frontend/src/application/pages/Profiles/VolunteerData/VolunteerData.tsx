import React from 'react';
import { ProfileVolunteer } from '../../../components/Volunteer/ProfileVolunteer';
import './VolunteerData.scss';

export const VolunteerData: React.FC = () => {
  return (
    <article className={'VolunteerData'}>
      <ProfileVolunteer />
    </article>
  );
};
