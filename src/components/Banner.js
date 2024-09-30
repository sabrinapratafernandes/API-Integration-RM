const Banner = () => {
    return (
        <div className="w-full h-auto bg-black text-white flex items-center justify-center md:justify-between md:text-center">
            <div className="p-4 md:w-2/3 md:p-2 flex flex-col items-center justify-center md:items-start md:ml-4 lg:ml-8">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-6xl">Bem vindo(a) ao mundo de Rick and Morty</h1>
                <h2 className="mt-4 text-base md:text-xl lg:text-2xl">Conheça mais sobre os personagens pesquisando ou navegando entre as páginas.</h2>
            </div>
            <img className="hidden md:block w-1/4 lg:w-1/4" src="./images/rm-banner.png"/>
        </div>
    )
}

export default Banner