import { useState } from 'react'
import { FiAlignJustify, FiSearch, FiSun, FiX, FiMoon } from 'react-icons/fi'

const navElement = ['Advanced', 'Syntax', 'Sets', 'Donate']

function NavBar () {
  const [navBar, setNavBar] = useState(false)
  const [iconX, seticonX] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleNavBar = () => {
    setNavBar(!navBar)
    seticonX(!iconX)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (<div className="bg-[#161B22]">
        <div className='w-full flex justify-between pl-4'>
            <div className="flex">
                <a href="http://localhost:5173/"><img className="h-16 w-auto" src="NavBar/Grookey.webp" alt="" srcSet="" /></a>
                <p className="text-white self-center font-semibold px-4">
                    Pokémon TCG Guru
                </p>
            </div>
            <div className='w-10 self-center' onClick={toggleNavBar}>
                {iconX ? <FiX className='w-6 h-auto text-white' /> : <FiAlignJustify className='w-6 h-auto text-white' />}
            </div>
        </div>
        <div className={navBar ? 'py-3 z-50 absolute bg-[#161B22] w-full' : 'hidden'}>
            <div className='relative'>
                <input className="w-full h-10 self-center rounded border-slate-800 bg-[#0D1117] text-white pl-10 border " placeholder='Search for a card' type="search" />
                <FiSearch className='absolute left-3 top-[0.7rem] text-[#606164] h-5 w-5' />
            </div>
            {navElement.map((item, index) => (<a className='flex text-[#beb6b6] pl-2 h-10 py-2 hover:bg-[#0D1117]' key={index} href="#">{item}</a>
            ))}
            <div className='hover:bg-[#0D1117] py-2' onClick={toggleDarkMode}>
            {darkMode ? <FiMoon className=' text-[#beb6b6] pl-2 py-1 h-6 w-6' /> : <FiSun className=' text-[#beb6b6] pl-2 py-1 h-6 w-6' />}
            </div>
        </div>
    </div>

  //   <div className="w-full flex justify-between bg-[#161B22]">
  //         <div className="flex ml-4 hover:text-blue-800">
  //             <a href="http://localhost:5173/"><img className="h-16 w-auto" src="NavBar/Grookey.webp" alt="" srcSet="" /></a>
  //             <p className="text-white self-center font-semibold px-4">
  //                 Pokémon TCG Guru
  //             </p>
  //             <input className="h-8 self-center rounded border-slate-800 bg-[#0D1117] text-white pl-4 border " type="text" />
  //         </div>
  //         <div className="self-center text-white mr-4">
  //             <p>test prueba</p>
  //         </div>
  //     </div>
  )
}

export default NavBar
