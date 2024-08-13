/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type Key, useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { type Datum } from './types/SearchCard'
import { ScrollClear } from '../helper/ScrollClear'
import NotFound from './NotFound'

function SearchCard () {
  ScrollClear()
  const { name, page } = useParams()
  const [pokeCards, setPokeCards] = useState([])
  const [loader, setLoader] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)
  const [pageBotton, setPageBotton] = useState<string | undefined>('1')
  const [totalCount, setTotalCount] = useState<number | null>(null)
  const [pageNumberParams, setPageNumberParams] = useState<number>()

  const navigate = useNavigate()

  useEffect(() => {
    const fechData = async () => {
      const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${name}&page=${page}&pageSize=25`)
      const dataApi = await response.json()
      const { data, totalCount } = dataApi
      setTotalCount(totalCount)
      setPokeCards(data)
      const pageNumber = Number(page)
      console.log(pageNumber)
      setPageBotton(page)

      setLoader(false)
    }
    void fechData()
  }, [pageNumber])

  useEffect(() => {
    const apiData = () => {
      if (totalCount !== null) {
        const finalPage = totalCount / 25
        const rounded = Math.ceil(finalPage)
        const roundedNumer = Number(rounded)
        setPageNumberParams(roundedNumer)
      }
    }
    apiData()
  }, [totalCount])
  const previousPage = (page: number) => {
    const numberBotton = Number(page)
    if (numberBotton <= 0) {
      return
    }
    setLoader(true)
    setPageNumber(numberBotton)
    navigate(`/Prueba-1/search/${name}/${numberBotton}`)
    window.scrollTo(0, 0)
  }

  const nextPage = (page: string, pageNumberParams: number) => {
    const numberBotton = Number(page)
    if (numberBotton >= pageNumberParams) {
      return
    }
    setLoader(true)
    const suma = numberBotton + 1
    setPageNumber(suma)
    navigate(`/Prueba-1/search/${name}/${suma}`)
    window.scrollTo(0, 0)
  }

  return (<div className='container mx-auto px-5 min-h-[600px]'>
    {loader
      ? <div className='flex justify-center items-center min-h-[600px]'>
        <div className='pokemon'></div>
      </div>
      : pokeCards.length === 0
        ? <NotFound title={"Hmmmm...we couldn't find any cards matching your search criteria!"} img={'/Prueba-1/noFound/nofound.png'} />
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
                  <img className='shadow-xl' key={index} width={245} height={342} src={item.images.small} alt={item.name} />
                </Link>
              ))}
          </div></>}
    <div className='flex justify-center font-semibold mb-5 '>
      <div onClick={() => { previousPage(page - 1) }} className={pageBotton === '1' ? 'bg-gray-600 rounded-lg p-4 m-1 cursor-not-allowed' : 'bg-gray-300 rounded-lg p-4 m-1 cursor-pointer'}>Previous</div>
      <div onClick={() => { nextPage(page, pageNumberParams) }} className={(page >= pageNumberParams) ? 'bg-gray-600 rounded-lg p-4 m-1 cursor-not-allowed' : 'bg-gray-300 rounded-lg p-4 m-1 cursor-pointer'}>Next</div>
    </div>
  </div>)
}

export default SearchCard
