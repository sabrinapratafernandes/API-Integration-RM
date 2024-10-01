import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../src/components/Banner';
import "@testing-library/jest-dom"

// Teste para verificar se o banner está sendo renderizado
test('render banner', () => {
  const { getByText } = render(<Banner />);
  const bannerText = getByText('Bem vindo(a) ao mundo de Rick and Morty');
  expect(bannerText).toBeInTheDocument();
});