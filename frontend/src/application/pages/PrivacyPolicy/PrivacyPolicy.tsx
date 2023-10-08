import * as React from 'react';
import './PrivacyPolicy.scss';
import { Privacy } from '../../components/Privacy/Privacy';

export const PrivacyPolicy: React.FC<{}> = () => {
  return (
    <article className={'PrivacyPolicy'}>
      <Privacy />
    </article>
  );
};

PrivacyPolicy.displayName = 'PrivacyPolicy';
