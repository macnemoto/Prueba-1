export interface PokemonStatistics {
  name: string
  power: number
  colors?: string[]
}

function Statistics ({ name, power }: PokemonStatistics) {
  return (
    <div className='flex justify-center items-center w-full px-4 mt-5'>
      <div className='flex items-center justify-between w-full md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 px-4'>
        <div className='flex flex-row w-3/5'>
          <img className='w-6 h-6 mt-1 mx-1' src="/img/Energ%3Fa_planta.webp" alt="planta verde" />
          <p className='self-center font-semibold'>{name}</p>
        </div>
        <p className='font-semibold w-2/5 text-gray-700 text-center'>
          {power}
        </p>
      </div>
    </div>
  )
}

export default Statistics
