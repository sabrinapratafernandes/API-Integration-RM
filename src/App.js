import React, { useEffect, useState, useCallback } from 'react';
import './index.js'
import './index.css'
import Button from './components/Button';
import Banner from './components/Banner';
import SearchInput from './components/SearchInput.js';
import PrincipalContent from './components/PrincipalContent';

function App() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [page, setPage] = useState(1); 
  const [search, setSearch] = useState('');
  const [visibleTable, setVisibleTable] = useState(null);

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

  const toggleTableVisibility = (id) => {
    if (visibleTable === id) {
      setVisibleTable(null);
    } else {
      setVisibleTable(id);
    }
  };
  
  return (
    <div className=''>
    <header className='bg-blue'> 
    </header>
    <main className='flex flex-col items-center'> 
    <Banner/>
    <SearchInput value={search} onChange={setSearch} />
    <PrincipalContent searchData={searchData} toggleTableVisibility={toggleTableVisibility} visibleTable={visibleTable}/>
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
