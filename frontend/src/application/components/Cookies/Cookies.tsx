import * as React from 'react';
import { HeaderCookiesPolicy } from './components/HeaderCookiesPolicy/HeaderCookiesPolicy';
import { CookiesContext } from './components/CookiesContext/CookiesContext';
import { FooterCookies } from './components/FooterCookies/FooterCookies';

export const Cookies: React.FC<{}> = () => {
  return (
    <article className="Cookies">
      <HeaderCookiesPolicy />
      <CookiesContext />
      <FooterCookies />
    </article>
  );
};
