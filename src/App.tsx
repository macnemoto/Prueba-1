import './App.css'
import { useEffect, useState } from 'react'
import { type PokemonCard } from './types/ApiResponse'
import cardPokemon from './data/cardPokemon.json'
import Statistics from './components/Statistics'
import ButtonOrange from './components/ButtonOrange'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App () {
  const [card, setCard] = useState<PokemonCard | null>(null)

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/cards/tk2b-3', {
      headers: {
        'X-Api-Key': import.meta.env.VITE_API_KEY
      }
    })
      .then(async (response) => await response.json())
      .then((card: PokemonCard) => {
        setCard(card)
        // console.log(card.data.images.large)
        console.log(cardPokemon)
      })
      .catch((error) => { console.log(error) })
  }, [])

  return (
    <main className=''>
      <NavBar/>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:py-10'>
        <div className=' flex lg: flex-col justify-center items-center px-10 lg:w-2/4'>
          <img className='h-auto w-80 my-10 lg:my-2 rounded-lg' src={card?.data.images.large} alt="Pokémon Bulbasaur Card" />
          <div className='hidden lg:block'>
            <ButtonOrange titleOne={'Find Corphish in Pokémon'} titleTwo={'Explore more cards'} widthOne={'w-[300px]'} widthTow={'w-[200px]'}></ButtonOrange>
          </div>
        </div>
        <section className=' flex flex-col items-center lg:items-start w-full font-semibold md:w-[560px] px-4 lg:px-0 lg:mt-3 lg:w-2/4'>
          <div className='lg:w-[430px]'>
            <p className='bg-slate-600 w-full rounded-t-lg p-4 text-white font-semibold text-2xl tracking-wide'>{card?.data.name}</p>
            <div className='flex w-full'>
              <div className='flex w-3/5 pb-2'>
                <div className='flex flex-row p-4 bg-gray-500  w-full '>
                  <p className='pr-1'>{card?.data.supertype}</p> - {card?.data.subtypes.map((item, index) =>
                    <div key={index}>
                      {index === card.data.subtypes.length - 1
                        ? <p className='pl-1'>{item}</p>
                        : <p className='pl-1'>{item} ,</p>}
                    </div>
                  )}
                </div>
              </div>
              <div className='flex flex-row justify-center items-center w-2/5 pb-3 bg-gray-500 rounded-bl-[9px]'>
                <p className='uppercase bg-gray-500 pr-2 '>ps <span className='text-2xl'> {card?.data.hp} </span></p>
                {card?.data.types.map((item, index) =>
                  <img className='h-6 w-6' key={index} src={`/img/${item}.webp`} alt={item} />
                )}
              </div>
            </div>
            <div className=' flex flex-col my-3 w-full '>
              {card?.data.attacks.map((item, index) =>
                <Statistics key={index} name={item.name} power={item.damage} cost={item.cost} text={item.text} />
              )}
            </div>
            <div className='w-full mb-4'>
              <div className='text-start grid grid-cols-3 gap-4 bg-gray-300 w-full text-sm text-gray-800 rounded-t-lg px-4 pt-2'>
                <div className='text-start'>
                  <p>Debilidad</p>
                  <div className='flex pt-3 self-end'>
                    {card?.data.weaknesses.map((item, index) =>
                      <div key={index} className='flex'>
                        <img className='w-6 h-6 mt-1 mx-1' src={`/img/${item.type}.webp`} alt={item.type} />
                        <span className='text-2xl text-black'>{item.value}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className=''>Resistencia
                  <div className='flex justify-center items-center'>
                    {((card?.data.resistances) != null)
                      ? card.data.resistances.map((item, index) => (
                        <div key={index} className='flex pt-4'>
                          <img className='w-6 h-6 mt-1 mx-1' src={`/img/${item.type}.webp`} alt={item.type} />
                          <span className='text-2xl text-black'>{item.value}</span>
                        </div>
                      ))
                      : <p></p>}
                  </div>
                </div>
                <div className='flex flex-col'>Coste de Retirada
                  <div className='flex justify-center items-center pt-4'>
                    {((card?.data.retreatCost) != null)
                      ? (card?.data.retreatCost.map((item, index) =>
                        <div key={index} className='flex'>
                          <img className='w-6 h-6 mt-1 mx-1' src={`/img/${item}.webp`} alt={item} />
                        </div>
                        ))
                      : <p></p>}
                  </div>
                </div>
              </div>
              <div className='self-start pt-4 bg-gray-300 rounded-b-lg w-full px-4 pb-2'>
                <a className='font-semibold text-blue-700' href="https://pokemon.fandom.com/es/wiki/Bulbasaur_(TCG)">Carta de promoción</a>
                <p className='font-medium' >SWSH231 Promo</p>
              </div>
              <div className='block lg:hidden'>
                <ButtonOrange titleOne={'Find Corphish in Pokémon'} titleTwo={'Explore more cards'} widthOne={'w-full'} widthTow={'w-full'}></ButtonOrange>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default App
