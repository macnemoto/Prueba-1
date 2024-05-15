import { type FieldValues, useForm, type SubmitHandler, type Control } from 'react-hook-form'
import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
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
    <footer className="bg-[#F5F5F7] dark:bg-[#18181B] px-4 pb-10 relative z-[100]">
      <section className='flex flex-col justify-center lg:container lg:mx-auto'>
        <div className='flex flex-col'>
          <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col lg:flex-row justify-center '>
              <section className='flex flex-col lg:w-1/2 justify-center items-center'>
                <div className='lg:w-[430px]'>
                  <p className='pb-5 font-bold text-xl text-[#1D1D1F] dark:text-white lg:text-2xl'>Sign up for Pokémon emails!</p>
                  <input className='w-full rounded h-10 pl-2 font-bold placeholder:text-slate-600 border-2 dark:border-0' {...register('email')} type='email' placeholder='Email' />
                  <div className='flex gap-3 mt-2'>
                    <select className='w-full rounded h-10 pl-2 font-bold  text-slate-600 dark:text-slate-600 border-2 dark:border-0 ' {...register('country')}>
                      {countries.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))}
                    </select>
                    <input onClick={() => { clickInput() }} className='w-full rounded h-10 pl-4 font-bold dark:text-[#757575] placeholder:text-slate-600 text-slate-600 border-2 dark:border-0' placeholder='Birthday' type={type} {...register('date')} />
                  </div>
                </div>
              </section>
              <section className='flex flex-col justify-center items-center lg:items-center lg:w-1/2 dark:text-white '>
                <div className=' md:w-[620px] lg:w-[430px] my-5'>
                  <p className='mb-4 mt-4 lg:mt-0 pl-3'>I’d like to receive emails about:</p>
                  <Checkbox name='videoGame' control={control} text='Pokémon video games, apps, and more' checked={true} />
                  <Checkbox name='centerPokemon' control={control} text='Pokémon Center (our official online shop)' checked={true} />
                  <Checkbox name='terms' control={control} text='I accept the Pokemon.com Terms of Use and Privacy Notice' checked={false} />
                </div>
              </section>
            </div>
            <div className='flex'>
              <div className='flex md:justify-center w-1/2 '>
                <div className='md:w-[260px] lg:w-[430px] '>
                  <input className='font-semibold text-white dark:text-black bg-[#1D1D1F] dark:bg-[#808080] w-[150px] rounded-lg h-16 mt-4 lg:mt-0' type="submit" />
                </div>
              </div>
              <div className='w-1/2'></div>
            </div>
          </form>
        </div>
      </section>
    </footer>
  )
}

export default Footer
