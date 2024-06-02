/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type Key, useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { type Datum } from './types/SearchCard'
import { ScrollClear } from '../helper/ScrollClear'

function SearchCard () {
  ScrollClear()
  const { name } = useParams()
  const [pokeCards, setPokeCards] = useState([])
  const [loader, setLoader] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fechData = async () => {
      try {
        if (name != null) {
          const dataPokeApi = localStorage.getItem(name)
          if (dataPokeApi != null) {
            const dataPokeApiParse = JSON.parse(dataPokeApi)
            setPokeCards(dataPokeApiParse)
            setLoader(false)
            return
          }
        }
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${name}&page=1&pageSize=25`)
        const dataApi = await response.json()
        const { data } = dataApi
        setPokeCards(data)
        console.log(data.length)

        if (data.length === 0) {
          navigate('/Prueba-1/card/no-found')
          return
        }

        if (name != null) {
          localStorage.setItem(name, JSON.stringify(data))
        }
        setLoader(false)
      } catch (error) {
        console.error('Error Fetching data:', error)
      }
    }
    void fechData()
  }, [name])

  return (<div className='container mx-auto px-5 min-h-[600px]'>
    {loader
      ? <div className='flex justify-center items-center min-h-[600px]'>
        <div className='pokemon'></div>
      </div>
      : <><div className='flex flex-col lg:flex-row lg:items-center mb-10 px-5 mt-5 gap-2  dark:text-white'>
        <label htmlFor="">View as</label>
        <select className='w-28 h-10 pl-2 pr-2 border border-zinc-950 rounded-md dark:text-white dark:bg-[#0D1117]'>
          <option value="Images">Images</option>
          <option value="List">List</option>
        </select>
        <label htmlFor="">Sorted by</label>
        <div className='flex h-10'>
          <select className='w-32 pl-2 rounded-l-md border border-zinc-950 dark:text-white dark:bg-[#0D1117] '>
            <option value="Name">Name</option>
            <option value="released">Set/Number</option>
            <option value="rarity">Rarity</option>
          </select>
          <select className='w-20 pl-2 rounded-r-md border border-zinc-950  dark:text-white dark:bg-[#0D1117] '>
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
          </select>
        </div>
      </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:lg:grid-cols-5 gap-5 xl:gap-10  mb-20 justify-items-center'>
          {
            pokeCards?.map((item: Datum, index: Key | null | undefined) => (
              <Link key={index} to={`/Prueba-1/card/${item.id}`}>
                <img key={index} width={245} height={342} src={item.images.small} alt={item.name} />
              </Link>
            ))}
        </div></>}
        <div>test</div>
  </div>)
}

export default SearchCard
