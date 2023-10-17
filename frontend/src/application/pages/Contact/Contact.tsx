import React from 'react';
import './Contact.scss';
import { TypeContacts } from '../../components/TypeContacts/TypeContacts';
import { FormContacts } from '../../components/FormContacts/FormContacts';

export const Contact: React.FC<{}> = () => {
  return (
    <article className="Contact">
      <TypeContacts />
      <FormContacts />
    </article>
  );
};
