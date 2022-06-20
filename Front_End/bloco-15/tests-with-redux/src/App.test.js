import React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
import App from './App';


describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 0 }}});
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
});
