import { useForm, type SubmitHandler } from 'react-hook-form'
import Checkbox from './Checkbox'
enum GenderEnum {
  Venezuela = 'Venezuela',
  Colombia = 'Colombia',
  Argentina = 'Argentina',
}

interface Inputs {
  email: string
  date: string
  exampleRequired: string
  country: GenderEnum
}

function Footer () {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data) }

  // console.log(watch('example'))

  return (
    <footer className="bg-[#18181B] px-4 pb-10">
      <p className='mb-4 pt-10 font-bold text-xl text-white lg:text-2xl'>Sign up for Pokémon emails!</p>
      <div className='flex flex-col gap-10'>
        <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col lg:flex-row lg:gap-5'>
            <section className='flex flex-col lg:w-2/4 justify-center gap-2 '>
              <input className='w-full rounded h-10 pl-2 font-bold' {...register('email')} type='email' placeholder='Email' />
              <div className='flex gap-3 mt-2'>
                <select className='w-full rounded h-10 pl-2' {...register('country')}>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Argentina">Argentina</option>
                </select>
                <input className='w-full rounded h-10 pl-4' placeholder='Fecha de nacimiento' type='date' {...register('date')} />
              </div>
            </section>
            <section className='flex flex-col lg:w-2/4 text-white '>
              <div className='mb-4 mt-4 lg:mt-0'>I’d like to receive emails about:</div>
              <Checkbox id={'videoGame'} text={'Pokémon video games, apps, and more'} verified={true} />
              <Checkbox id={'centerPokemon'} text={'Pokémon Center (our official online shop)'} verified={true} />
              <Checkbox id={'terms'} text={'I accept the Pokemon.com Terms of Use and Privacy Notice'} verified={false} />
            </section>
          </div>
          <input className='flex justify-center items-center font-semibold bg-[#808080] w-[150px] rounded-lg h-16 mt-4 lg:mt-0' type="submit" />
        </form>
      </div>
      {/* <a className='flex justify-center items-center font-semibold bg-[#808080] w-[150px] rounded-lg h-16 mt-4 lg:mt-0' href="">SIGN UP</a> */}
    </footer>
  )
}

export default Footer
