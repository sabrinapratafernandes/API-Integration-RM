import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrincipalContent from '../src/components/PrincipalContent'; // Ajuste o caminho conforme necessário

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
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
];

// Teste para verificar se os personagens estão sendo exibidos
test('should display characters from searchData', async () => {
  render(
    <PrincipalContent 
      searchData={mockData} 
      toggleTableVisibility={() => {}} 
      visibleTable={null} 
    />
  );

  await waitFor(() => {
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
  });

});
