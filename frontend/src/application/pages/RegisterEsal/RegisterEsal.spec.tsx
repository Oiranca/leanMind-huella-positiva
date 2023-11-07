import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RegisterEsal } from './index';
import { BrowserRouter } from 'react-router-dom';

describe('RegisterVolunteer Esal', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <RegisterEsal />
      </BrowserRouter>,
    );
    expect(renderResult.queryByText('Datos Entidad')).toBeTruthy();
  });
});
