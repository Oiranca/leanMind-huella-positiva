import * as React from 'react';
import './PrivacyPolicy.scss';
import { Privacy } from './components/Privacy/Privacy';
import { PrivacyFaq } from './components/PrivacyFaq/PrivacyFaq';
import { faqs } from './assets/faqs/faqs';

export const PrivacyPolicy: React.FC<{}> = () => {
  return (
    <article className={'PrivacyPolicy'}>
      <Privacy />
      <PrivacyFaq faqs={faqs} />
    </article>
  );
};

PrivacyPolicy.displayName = 'PrivacyPolicy';
