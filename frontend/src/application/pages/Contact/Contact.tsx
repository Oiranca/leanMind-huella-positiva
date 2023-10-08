import React from 'react';
import './Contact.scss';
import { TypeContacts } from '../../components/TypeContacts/TypeContacts';
import { FormContacts } from '../../components/FormContacts/FormContacts';

export const Contact: React.FC<{}> = () => {
  return (
    <div className="main-div">
      <TypeContacts />
      <FormContacts />
    </div>
  );
};
