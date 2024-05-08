import { type FieldValues, useForm, type SubmitHandler, type Control } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
// import Checkbox from './Checkbox'
enum GenderEnum {
  Venezuela = 'Venezuela',
  Colombia = 'Colombia',
  Argentina = 'Argentina',
}

export interface Inputs extends FieldValues {
  name: string
  email: string
  date: string
  exampleRequired: string
  country: GenderEnum
}

interface Country {
  name: {
    common: string
  }
}

function Footer () {
  const { register, handleSubmit, control } = useForm<Inputs, Control>()
  const [type, setType] = useState('text')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(async res => await res.json())
      .then(data => {
        const countryNames = data.map((country: Country) => country.name.common)
        const countriSort = countryNames.sort()
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setCountries(countriSort)
      })
      .catch(error => { console.error('Error:', error) })
  }, [])
  const clickInput = () => {
    setType('date')
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data) }

  return (
    <footer className="bg-[#F5F5F7] dark:bg-[#18181B] px-4 pb-10">
      <section className='container mx-auto lg:w-[850px]'>
        <p className='pt-10 font-bold text-xl text-[#1D1D1F] dark:text-white lg:text-2xl'>Sign up for Pokémon emails!</p>
        <div className='flex flex-col gap-10'>
          <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col lg:flex-row lg:gap-5'>
              <section className='flex flex-col lg:w-2/4 justify-center gap-[.90rem] '>
                <input className='w-full rounded h-10 pl-2 font-bold placeholder:text-slate-600 border-2 dark:border-0' {...register('email')} type='email' placeholder='Email' />
                <div className='flex gap-3 mt-2'>
                  <select className='w-full rounded h-10 pl-2 font-bold text-slate-600 dark:text-[#757575] border-2 dark:border-0 ' {...register('country')}>
                    {countries.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                  </select>
                  <input onClick={() => { clickInput() } } className='w-full rounded h-10 pl-4 font-bold dark:text-[#757575] placeholder:text-slate-600 text-slate-600 border-2 dark:border-0' placeholder='Birthday' type={type} {...register('date')} />
                </div>
              </section>
              <section className='flex flex-col lg:w-2/4 dark:text-white '>
                <div className='mb-4 mt-4 lg:mt-0'>I’d like to receive emails about:</div>
                <Checkbox name='videoGame' control={control} text='Pokémon video games, apps, and more' checked={true} />
                <Checkbox name='centerPokemon' control={control} text='Pokémon Center (our official online shop)' checked={true} />
                <Checkbox name='terms' control={control} text='I accept the Pokemon.com Terms of Use and Privacy Notice' checked={false} />
              </section>
            </div>
            <input className='flex justify-center items-center font-semibold text-white dark:text-black bg-[#1D1D1F] dark:bg-[#808080] w-[150px] rounded-lg h-16 mt-4 lg:mt-0' type="submit" />
          </form>
        </div>
      </section>
    </footer>
  )
}

export default Footer
