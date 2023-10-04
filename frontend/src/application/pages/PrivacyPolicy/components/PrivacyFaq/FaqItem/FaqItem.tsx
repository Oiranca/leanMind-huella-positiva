import React from 'react';
import { Faq } from '../../../assets/faqs/faqs';
import './FaqItem.scss';

interface FaqProps {
  faq: Faq;
}

export const FaqItem = ({ faq }: FaqProps) => {
  return (
    <article className={'FaqItem'}>
      <header>
        <h3> {faq.question} </h3>
      </header>
      <section>
        <p> {faq.answer} </p>
        <ul>
          {faq.answerContentList.map((answerContent, index) => (
            <li key={index}> {answerContent} </li>
          ))}
        </ul>
        <p> {faq.closeAnswer} </p>
      </section>
    </article>
  );
};
