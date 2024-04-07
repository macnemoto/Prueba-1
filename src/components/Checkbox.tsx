import { Controller, type Control } from 'react-hook-form'
import { type Inputs } from './Footer'

export interface CheckboxProps {
  name: string
  control: Control<Inputs, Control>
  text: string
}

function Checkbox ({ name, control, text }: CheckboxProps) {
  return (<div className='flex justify-center items-center gap-3 lg:gap-0 my-1'>
    <Controller
      name={name}
      control={control}
      render={({ field }) => <input className=' h-6 w-[10%]' type="checkbox" id={name} {...field} />}
    />
    <label className='w-[90%] text-base leading-[1rem]' htmlFor={name}>{text}</label>
  </div>)
}

export default Checkbox
