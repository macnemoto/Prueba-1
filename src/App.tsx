import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokeDexHome from './components/PokeDexHome'
import SearchCard from './pages/SearchCard'
import CardTemplate from './components/CardTemplate'

function App () {
  return (
    <BrowserRouter basename="/">
      <div className='bg-white dark:bg-[#1A202C]'>
        <NavBar />
        <Routes>
          <Route path='/' element={<PokeDexHome />} />
          <Route path='/search/:name' element={<SearchCard/>} />
          <Route path='/card/:id' element={<CardTemplate/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
