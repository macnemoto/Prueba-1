import './App.css'
import PokeDexHome from './components/PokeDexHome'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App () {
  return (
    <main className='bg-white dark:bg-[#1A202C]'>
      <NavBar />
      <PokeDexHome />
      <Footer />
    </main>
  )
}

export default App
