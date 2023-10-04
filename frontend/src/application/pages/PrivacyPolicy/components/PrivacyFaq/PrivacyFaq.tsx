import React from 'react';
import { Faq } from '../../assets/faqs/faqs';
import { FaqItem } from './FaqItem/FaqItem';

interface FaqProps {
  faqs: Faq[];
}

export const PrivacyFaq = ({ faqs }: FaqProps) => {
  return (
    <article>
      {faqs.map((faq, index) => (
        <FaqItem faq={faq} key={index} />
      ))}
    </article>
  );
};
