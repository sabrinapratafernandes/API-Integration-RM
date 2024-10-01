import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import PrincipalContent from '../src/components/PrincipalContent';
import "@testing-library/jest-dom";

// Mock de dados para teste
// Simula dados para que a verificação possa ser feita
const mockData = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
];

// Teste para verificar a visibilidade da tabela
test('toggle table visibility when character is clicked', async () => {
  const toggleTableVisibilityMock = jest.fn();
  const { getByText, queryByText } = render(
    <PrincipalContent 
      searchData={mockData} 
      toggleTableVisibility={toggleTableVisibilityMock} 
      visibleTable={null} 
    />
  );

  const rickCard = getByText('Rick Sanchez');
  expect(rickCard).toBeInTheDocument();

  fireEvent.click(rickCard);

  expect(toggleTableVisibilityMock).toHaveBeenCalledWith(1);

  const { getByText: getByTextAfterClick } = render(
    <PrincipalContent 
      searchData={mockData} 
      toggleTableVisibility={toggleTableVisibilityMock} 
      visibleTable={1} 
    />
  );

  const statusText = await waitFor(() => getByTextAfterClick('Status'));
  expect(statusText).toBeInTheDocument();

});
