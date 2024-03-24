export interface PokemonStatistics {
  name: string
  power: string
  cost?: string[]
  text: string
}

function Statistics ({ name, power, cost, text }: PokemonStatistics) {
  return (
    <section className='flex flex-col justify-center items-center w-full px-4 my-5 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 text-white'>
      <div className='flex items-center justify-between w-full px-4 mb-4'>
        <div className='flex flex-row w-4/5 '>
          {cost?.map((item, index) =>
            <img key={index} className='w-6 h-6 mt-1 mx-1' src={`/img/${item}.webp`} alt={item} />
          )}
          <p className='self-center font-semibold'>{name}</p>
        </div>
        <p className='font-semibold w-1/5  text-gray-700 text-center'>
          {power}
        </p>
      </div>
      <p className="text-white px-4 text-left w-full">{text}</p>
    </section>
  )
}

export default Statistics
