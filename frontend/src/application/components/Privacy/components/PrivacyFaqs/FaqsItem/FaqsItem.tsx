import React from 'react';
import { FaqsList } from '../../../assets/faqsList/faqsList';
import './FaqsItem.scss';

interface FaqsListProps {
  list: FaqsList;
}

export const FaqsItem = ({ list }: FaqsListProps) => {
  return (
    <article className={'FaqItem'}>
      <header>
        <h3> {list.title} </h3>
      </header>
      <section>
        <p> {list.paragraph} </p>
        <ul>
          {list.list.map((answerContent, index) => (
            <li key={index}> {answerContent} </li>
          ))}
        </ul>
        {list.endParagraph !== '' && <p> {list.endParagraph} </p>}
      </section>
    </article>
  );
};
