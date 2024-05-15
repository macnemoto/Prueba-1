import { FiSearch } from 'react-icons/fi'

const cardPokemonHome = [
  { numero: 1, right: 'right-[0px]', left: 'left-[-700px]', position: 'z-20', bottom: 'bottom-[-250px]' },
  { numero: 2, right: 'right-[0px]', left: 'left-[-350px]', position: 'z-10', bottom: 'bottom-[-150px]' },
  { numero: 3, right: 'right-[0px]', left: 'left-[0px]', position: 'z-20', bottom: 'bottom-[-200px]' },
  { numero: 4, right: 'right-[-350px]', left: 'left-[0px]', position: 'z-10', bottom: 'bottom-[-150px]' },
  { numero: 5, right: 'right-[-700px]', left: 'left-[0px]', position: 'z-20', bottom: 'bottom-[-250px]' }
]

console.log(cardPokemonHome[0].left)

function PokeDexHome () {
  return (<main className="container mx-auto text-[#1d1d1f] dark:text-white mt-16 bg-yellow-950">
        <div className=' flex flex-col justify-center items-center text-center mt-32 relative overflow-hidden min-h-[480px]'>
            <h1 className=" text-[2rem] leading-9 font-semibold">Pokémon TCG Guru</h1>
            <h2 className='text-xl mb-6 text-[#818A93]'>The Ultimate Pokémon Card Database</h2>
            <div className=" flex w-full justify-center items-center mb-6">
                <p className='relative w-full max-w-[41.19rem]'>
                    <input className="w-full rounded border-slate-800 dark:bg-[#0D1117] dark:text-white py-2 pl-10 pr-2 border " placeholder='Search for a card' type="search" />
                    <FiSearch className=' absolute left-[0.75rem] top-[0.68rem] text-[#606164] h-5 w-5' />
                </p>
            </div>
            <h4 className='text-center mb-24'>Try <a className='text-[#485fc7]' href="#"> {'"venusaur"'} </a> or <a className='text-[#485fc7]' href="#"> {'"subtypes:mega"'} </a> or simply <a className='text-[#485fc7un ]' href="#">Browse By Set</a> </h4>
            {/* <div className=' h-[50vh] w-full lg:w-2/3  bg-blue-700 relative overflow-hidden'> */}
                {cardPokemonHome.map((item, index) => (
                    <a key={index} href="#">
                        <img width='240' className={`mx-auto absolute ${item.position} ${item.left} ${item.right} ${item.bottom}`} src={`/img/homeImg/${item.numero}.png`} alt="" />
                    </a>
                ))}
            {/* </div> */}
        </div>
    </main>)
}

export default PokeDexHome
