import React, { useEffect, useState, useCallback } from 'react';
import './index'
import Button from './components/Button';

function App() {
  const [data, setData] = useState([]); // Estado que armazena os dados dos personagens retornados da API. Inicialmente é um array vazio.
  const [loading, setLoading] = useState(false); // Estado que indica se os dados estão sendo carregados ou não. Inicialmente falso.
  const [page, setPage] = useState(1); // Estado que armazena o número da página atual. Inicialmente começa na página 1.

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
  
  return (
    <div className='bg-green'>
    <header className='bg-blue flex p-2 justify-between text-white text-xl'>
      <Button label="Página Anterior" onClick={prevPage} />
      <Button label="Próxima Página" onClick={nextPage} />
    </header>
    <main className='grid grid-cols-3'>
    {data.map((info)=>
    <div className='p-2 m-2 bg-purple rounded items-center justify-center'>
    <img src={info.image}/>
    <p className='text-lg font-bold text-white'>{info.name}</p>
    </div>
    )}
    </main>
    <footer>
    </footer>
    </div>
  );
}

export default App;
