import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokeDexHome from './components/PokeDexHome'
import SearchCard from './pages/SearchCard'
import CardTemplate from './components/CardTemplate'
import NotFound from './pages/NotFound'

function App () {
  return (
    <BrowserRouter basename="/">
      <div className='bg-white dark:bg-[#1A202C]'>
        <NavBar />
        <Routes>
          <Route path='/Prueba-1' element={<PokeDexHome/>} />
          <Route path='/Prueba-1/search/:name' element={<SearchCard/>} />
          <Route path='/Prueba-1/search/:name/:page' element={<SearchCard/>} />
          <Route path='/Prueba-1/card/:id' element={<CardTemplate/>} />
          <Route path='*' element={<NotFound title={"Woops! That page doesn't exist!"} img='/Prueba-1/noFound/pikachu.png'/> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
