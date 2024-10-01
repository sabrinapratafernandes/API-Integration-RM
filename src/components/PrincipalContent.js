import translate from "../translations"

const PrincipalContent = ({ searchData, toggleTableVisibility, visibleTable }) => {

    return (
    
    <div className='grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-2'>
    {searchData.map((info)=>
    <div 
    key={info.id}
    className='p-2 bg-green hover:bg-black hover:text-green rounded flex flex-col items-center justify-center cursor-pointer'
    onClick={() => toggleTableVisibility(info.id)}>

    <img className='mt-4' src={info.image}/>
    <p className='p-2 text-lg font-bold'>{info.name}</p>
  
    <div className='p-2 md:w-full'>

      {visibleTable == info.id &&(
      <table className="table-auto border-collapse border w-full">
        <tbody>
          <tr>
            <td className="border border-blue p-2">Status</td>
            <td className="border border-blue p-2">{translate.status[info.status] || info.status}</td>
          </tr>
          <tr>
            <td className="border border-blue p-2">Espécie</td>
            <td className="border border-blue p-2">{translate.species[info.species] || info.species}</td>
          </tr>
          <tr>
            <td className="border border-blue p-2">Tipo</td>
            <td className="border border-blue p-2">{info.type || "Não especificado"}</td>
          </tr>
          <tr>
            <td className="border border-blue p-2">Gênero</td>
            <td className="border border-blue p-2">{translate.gender[info.gender] || info.gender}</td>
          </tr>
        </tbody>
      </table>
      )}
    </div>
    </div>
    )}
    </div>
    )
}

export default PrincipalContent