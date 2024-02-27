import './App.css'

function App() {


  return (
    <div className=' bg-gradient-to-r from-green-400 to-teal-500 h-screen'>
      <div className=' flex flex-col justify-center items-center px-4'>
        <img className='w-64 my-3 rounded-lg' src="/src/assets/img/Captura de pantalla 2024-02-26 140801.png" alt="Pokémon Bulbasaur Card" />
        <div className='flex flex-col items-center justify-between w-full font-semibold sm:w-1/2 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4'>
          <p className='bg-slate-600 w-full rounded-t-lg p-4 text-white font-semibold text-2xl tracking-wide'>Bulbasaur</p>
          <div className='flex w-full'>
            <div className='flex w-3/5 pb-2'>
              <div className='bg-gray-500  w-full'>
                <p className='px-4 py-2 w-full'>Pokémon Básico</p>
              </div>
            </div>
            <div className='flex flex-row justify-center pt-1 w-2/5 bg-gray-500 rounded-bl-lg'>
              <p className='uppercase bg-gray-500 '>ps <span className='text-2xl'>70</span></p>
              <img className='w-6 h-6 mt-1 mx-1' src="/src/assets/Energ%3Fa_planta.webp" alt="planta verde" />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center w-full px-4 mt-5  '>
        <div className='flex items-center justify-between w-full md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 px-4 '>
          <div className='flex flex-row w-3/5'>
            <img className='w-6 h-6 mt-1 mx-1' src="/src/assets/Energ%3Fa_planta.webp" alt="planta verde" />
            <p className=' self-center font-semibold '>Látigo Cepa </p>
          </div>
          <p className='font-semibold w-2/5 text-gray-700 text-center'>
            10
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center w-full px-4 mt-5 pb-4  '>
        <div className='flex items-center justify-between w-full md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 px-4 '>
          <div className='flex flex-row'>
            <img className='w-6 h-6 mt-1 mx-1' src="/src/assets/Energ%3Fa_planta.webp" alt="planta verde" />
            <img className='w-6 h-6 mt-1 mx-1' src="/src/assets/Energ%3Fa_incolora.webp" alt="planta verde" />
            <p className=' self-center font-semibold '>Hoja Afilada </p>
          </div>
          <p className='font-semibold w-2/5 text-gray-700  text-center'>
            20
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center  w-full'>
        <div className='flex flex-col items-center justify-between w-full md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 px-4 md:px-0 '>
          <div className='grid grid-cols-3 gap-4 bg-gray-300 w-full text-sm text-gray-800 rounded-t-lg px-4 pt-2'>
            <div className=''>
              <p>Debilidad</p>
              <div className='flex flex-row pt-3 self-end'>
                <img className='w-6 h-6 mt-1 mx-1' src="/src/assets/Energ%3Fa_fuego.webp" alt="planta verde" />
                <span className='text-2xl text-black'>x2</span>
              </div>
            </div>
            <div>Resistencia</div>
            <div>Coste de Retirada
              <div className='flex flex-row pt-3'>
                <img className='w-6 h-6 mt-1 mx-1' src="/src/assets/Energ%3Fa_incolora.webp" alt="planta incoloro" />
                <img className='w-6 h-6 mt-1 mx-1' src="/src/assets/Energ%3Fa_incolora.webp" alt="planta incoloro" />
              </div>
            </div>
          </div>
          <div className='self-start pt-4 bg-gray-300 rounded-b-lg w-full px-4 pb-2'>
            <a className='font-semibold text-blue-700' href="https://pokemon.fandom.com/es/wiki/Bulbasaur_(TCG)">Carta de promoción</a>
            <p className='font-medium' >SWSH231 Promo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
