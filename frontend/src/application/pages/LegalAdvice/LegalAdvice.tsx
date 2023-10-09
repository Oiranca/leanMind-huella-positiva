import * as React from 'react';
import { Advice } from '../../components/Advice/Advice';
import './LegalAdvice.scss';

export const LegalAdvice: React.FC<{}> = () => (
  <article className="LegalAdvice">
    <Advice />
  </article>
);

LegalAdvice.displayName = 'LegalAdvice';
