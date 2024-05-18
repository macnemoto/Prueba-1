import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokeDexHome from './components/PokeDexHome'
import SearchCard from './pages/SearchCard'

function App () {
  return (
    <BrowserRouter basename="/">
      <div className='bg-white dark:bg-[#1A202C]'>
        <NavBar />
        <Routes>
          <Route path='/' element={<PokeDexHome />} />
          <Route path='/search/:name' element={<SearchCard/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
