import { useParams } from 'react-router-dom'

function SearchCard () {
  const { name } = useParams()

  return (<div>
    <h1 className='flex justify-center items-center h-screen text-white font-bold text-5xl'>Este es tu pokemon {name} !</h1>
  </div>)
}

export default SearchCard
