interface CheckboxProps {
  id: string
  text: string
  verified: boolean

}

function Checkbox ({ id, text, verified }: CheckboxProps) {
  return (
  <div className='flex gap-3 lg:gap-0 my-1'>
  <input className=' h-6 w-[10%]' defaultChecked={verified} type="checkbox" id={id} />
  <label className='w-[90%] text-base leading-[.90rem]' htmlFor={id}>{text}</label>
</div>
  )
}

export default Checkbox
