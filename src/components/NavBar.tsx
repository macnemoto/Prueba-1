import { useEffect, useState } from 'react'
import { FiAlignJustify, FiSearch, FiSun, FiX, FiMoon } from 'react-icons/fi'

const navElement = ['Advanced', 'Syntax', 'Sets', 'Donate']

function NavBar () {
  const [navBar, setNavBar] = useState(false)
  const [iconX, setIconX] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const toggleNavBar = () => {
    setNavBar(!navBar)
    setIconX(!iconX)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])
  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <header className="flex justify-center bg-[#FFFFFF] dark:bg-[#161B22] drop-shadow-xl dark:drop-shadow-none relative z-50 h-16">
      <div className=' flex justify-between pl-4 lg:justify-between lg:container lg:mx-auto lg:pl-10'>
        <div className="flex relative">
          <a href="http://localhost:5173/"><img className=" h-auto w-16 lg:w-[4rem]" src="NavBar/Grookey.webp" alt="pokemon" /></a>
          <a className='dark:text-white self-center font-semibold px-4 lg:w-44 lg:text-center lg:px-0"' href="http://localhost:5173/" >
            Pokémon TCG Guru
          </a>
          <input className="h-10 self-center rounded border-slate-800 dark:bg-[#0D1117] dark:text-white py-2 pl-10 pr-2 border hidden lg:block " placeholder='Search for a card' type="search" />
          <FiSearch className='hidden lg:block absolute left-[15.7rem] top-[1.3rem] text-[#606164] h-5 w-5' />
        </div>
        <div className='w-10 self-center lg:hidden' onClick={toggleNavBar}>
          {iconX ? <FiX className='w-6 h-auto dark:text-white' /> : <FiAlignJustify className='w-6 h-auto dark:text-white' />}
        </div>
        <div className='hidden lg:block'>
          <div className='dark:text-white flex h-full'>
            {navElement.map((item, index) => (
              <a className='  px-4 flex items-center h-full hover:bg-[#F2F2F2] dark:hover:bg-[#0D1117]' key={index} href={`/${item}`}>{item}</a>
            ))}
            <div className='hover:bg-[#F2F2F2] dark:hover:bg-[#0D1117] py-2 lg:mr-5 flex  items-center' onClick={() => { toggleDarkMode(); handleChangeTheme() }}>
              {darkMode ? <FiMoon className=' text-[#1D1D1F]  h-6 w-10' /> : <FiSun className=' text-[#beb6b6]  h-6 w-10' />}
            </div>
          </div>
        </div>
      </div>
      <div className='block lg:hidden'>
        <div className={navBar ? 'py-3 z-50 absolute bg-[#ffffff] dark:bg-[#161B22] w-full' : 'hidden'}>
          <div className='relative'>
            <input className="w-full h-10 self-center rounded dark:border-slate-800 dark:bg-[#0D1117] dark:text-white pl-10 pr-4 border " placeholder='Search for a card' type="search" />
            <FiSearch className='absolute left-3 top-[0.7rem] text-[#606164] h-5 w-5' />
          </div>
          {navElement.map((item, index) => (<a className='flex dark:text-[#beb6b6] pl-2 h-10 py-2 hover:bg-[#F2F2F2] dark:hover:bg-[#0D1117]' key={index} href={`/${item}`}>{item}</a>
          ))}
          <div className='hover:bg-[#F2F2F2] dark:hover:bg-[#0D1117] py-2' onClick={() => { toggleDarkMode(); handleChangeTheme() }}>
            {darkMode ? <FiMoon className=' text-[#1D1D1F] pl-2 py-1 h-6 w-6' /> : <FiSun className=' text-[#beb6b6]  pl-2 py-1 h-6 w-6' />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
