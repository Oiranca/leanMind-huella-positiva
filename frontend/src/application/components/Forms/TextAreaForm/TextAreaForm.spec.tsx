import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TextAreaForm } from './TextAreaForm';

/*Arreglar test*/
describe('InputTextArea', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <TextAreaForm title={'textArea'} name="textArea" placeholder="Información de interés" />,
    );
    expect(renderResult.queryByLabelText('textArea')).toBeTruthy();
  });
});
