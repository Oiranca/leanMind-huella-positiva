import React from 'react';
import { MixModifyUserForm } from '../../../../infrastructure/view/components/organisms/Forms/MixModifyUserForm/MixModifyUserForm';
import './ModifyUser.scss';

export const ModifyUser: React.FC<{}> = () => (
  <div>
    <MixModifyUserForm />
  </div>
);

ModifyUser.displayName = 'ModifyUser';
