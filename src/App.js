import React, { useEffect, useState, useCallback } from 'react';
import './index'
import Button from './components/Button';
import Banner from './components/Banner';

function App() {
  const [data, setData] = useState([]); // Estado que armazena os dados dos personagens retornados da API. Inicialmente é um array vazio.
  const [loading, setLoading] = useState(false); // Estado que indica se os dados estão sendo carregados ou não. Inicialmente falso.
  const [page, setPage] = useState(1); // Estado que armazena o número da página atual. Inicialmente começa na página 1.
  const [search, setSearch] = useState('');

  const temp = () => {
    console.log('temp '+ page)
  }

  const importData = useCallback(async () => {
    setLoading(true);
    await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(async res => {
      const data = await res.json();
      setData(data.results);
    })
    .catch(console.log);
    setLoading(false);
  },[page]);

 const prevPage = () => {
  setPage(page > 1 ? page - 1 : page)
 }

 const nextPage = () => {
  setPage(page => page + 1)
 }

  useEffect(() => {
    importData()
  },[importData])

  const searchData = data.filter(info =>
    info.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  
  return (
    <div className=''>
    <header className='bg-blue'> 
    </header>
    <main className='flex flex-col items-center'> 
    <Banner/>
    <input 
          className='w-4/5 border-solid border-2 border-black rounded-lg m-2 lg:w-3/5'
          type="text"
          placeholder="Digite o nome de um personagem..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Atualiza o valor da busca
    />
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
    {searchData.map((info)=>
    <div className='p-2 m-2 bg-green hover:bg-purple rounded flex flex-col items-center justify-center'>
    <img className='mt-4' src={info.image}/>
    <p className='p-2 text-lg font-bold'>{info.name}</p>
    </div>
    )}
    </div>
    <div className='w-full flex justify-center'>
      <Button label="Página Anterior" onClick={prevPage} />
      <Button label="Próxima Página" onClick={nextPage} />
    </div>
    </main>
    <footer>
    </footer>
    </div>
  );
}

export default App;
