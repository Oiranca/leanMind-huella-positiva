import React from 'react';
import { FaqsList } from '../../assets/faqsList/faqsList';
import { FaqsItem } from './FaqsItem/FaqsItem';

interface ListProps {
  list: FaqsList[];
}

export const PrivacyFaqs = ({ list }: ListProps) => {
  return (
    <article>
      {list.map((faq, index) => (
        <FaqsItem list={faq} key={index} />
      ))}
    </article>
  );
};
