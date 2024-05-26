import { useState, type ChangeEvent, type FormEvent } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export interface InputPokemonType {
  inputClass: string
  updateNavbarToggle?: () => void
}

function InputPokemon ({ inputClass, updateNavbarToggle }: InputPokemonType) {
  const [pokemonName, setPokemonName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (pokemonName.trim().length > 0) {
      navigate(`/Prueba-1/search/${pokemonName.trim().toLowerCase()}`)
      if (updateNavbarToggle != null) {
        updateNavbarToggle()
      }
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value)
  }

  return (
    <form className='flex self-center relative w-full max-w-[41.19rem] h-full' onSubmit={handleSubmit}>
      <input className={`self-center rounded border-slate-800 dark:bg-[#0D1117] dark:text-white py-2 pl-10 pr-2 ${inputClass}`} placeholder='Search for a card' type="search" value={pokemonName} onChange={handleChange} />
      <FiSearch className=' absolute left-[0.75rem] top-[0.68rem] text-[#606164] h-5 w-5' />
    </form>

  )
}

export default InputPokemon
