import React from 'react';

// Campo de busca, retorna os personagens conforme busca por nome.
const SearchInput = ({ value, onChange }) => {
  return (
    <input 
      className='p-2 w-4/5 border-solid border-2 border-black rounded-lg m-2 lg:w-3/5'
      type="text"
      placeholder="Digite o nome de um personagem..."
      value={value}
      onChange={(e) => onChange(e.target.value)} 
    />
  );
}

export default SearchInput;
