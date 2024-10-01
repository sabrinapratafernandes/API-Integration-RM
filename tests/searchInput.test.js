// components/SearchInput.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from '../src/components/SearchInput';
import '@testing-library/jest-dom';

// Teste para verificar se o campo de busca esta funcionando adequadamente
test('renders SearchInput component and updates value on change', () => {
  const mockOnChange = jest.fn();
  
  const { getByPlaceholderText } = render(
    <SearchInput value="" onChange={mockOnChange} />
  );

  const inputElement = getByPlaceholderText('Digite o nome de um personagem...');
  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: 'Rick' } });
  
  expect(mockOnChange).toHaveBeenCalledWith('Rick');
});
