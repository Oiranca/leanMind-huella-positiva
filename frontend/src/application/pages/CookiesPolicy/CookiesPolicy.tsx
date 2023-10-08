import * as React from 'react';
import { Cookies } from '../../components/Cookies/Cookies';
import './CookiesPolicy.scss';

export const CookiesPolicy: React.FC<{}> = () => (
  <div className="CookiesPolicy">
    <Cookies />
  </div>
);

CookiesPolicy.displayName = 'CookiesPolicy';
