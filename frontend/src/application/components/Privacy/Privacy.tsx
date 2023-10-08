import * as React from 'react';
import './Privacy.scss';
import { PrivacyHeader } from './components/PrivacyHeader/PrivacyHeader';
import { PrivacyFaqs } from './components/PrivacyFaqs/PrivacyFaqs';
import { faqsList } from './assets/faqsList/faqsList';
import { PrivacyContext } from './components/PrivacyContext/PrivacyContext';
import { PrivacyCompanyID } from './components/PrivacyCompanyID/PrivacyCompanyID';

export const Privacy: React.FC<{}> = () => {
  return (
    <article className="Privacy">
      <PrivacyHeader />
      <PrivacyCompanyID />
      <PrivacyFaqs list={faqsList} />
      <PrivacyContext />
    </article>
  );
};
