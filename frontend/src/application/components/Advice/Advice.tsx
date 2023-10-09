import React from 'react';
import { HeaderLegalAdvice } from './components/HeaderLegalAdvice/HeaderLegalAdvice';
import { LegalAdviceCompanyID } from './components/LegalAdviceCompanyID/LegalAdviceCompanyID';
import './Advice.scss';
import { AdviceContext } from './components/AdviceContext/AdviceContext';

export const Advice: React.FC<{}> = () => {
  return (
    <article className={'Advice'}>
      <HeaderLegalAdvice />
      <LegalAdviceCompanyID />
      <AdviceContext />
    </article>
  );
};
