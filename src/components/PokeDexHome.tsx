import { FiSearch } from 'react-icons/fi'

function PokeDexHome () {
  return (<main className="container mx-auto h-screen text-[#1d1d1f] dark:text-white mt-16">
        <div className='mx-5 flex flex-col justify-center items-center text-center'>
            <h1 className=" text-[2rem] leading-9 font-semibold">Pokémon TCG Guru</h1>
            <h2 className='text-xl mb-6 text-[#818A93]'>The Ultimate Pokémon Card Database</h2>
            <div className=" flex w-full justify-center items-center mb-6">
                <p className='relative w-full max-w-[41.19rem]'>
                <input className="w-full rounded border-slate-800 dark:bg-[#0D1117] dark:text-white py-2 pl-10 pr-2 border " placeholder='Search for a card' type="search" />
                <FiSearch className=' absolute left-[0.75rem] top-[0.68rem] text-[#606164] h-5 w-5' />
                </p>
            </div>
            <h4 className='text-center'>Try <a className='text-[#5660e1]' href="#"> {'"venusaur"'} </a> or <a className='text-[#5660e1]' href="#"> {'"subtypes:mega"'} </a> or simply <a className='text-[#5660e1]' href="#">Browse By Set</a> </h4>
        </div>
    </main>)
}

export default PokeDexHome
