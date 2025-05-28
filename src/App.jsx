
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import TopHeadlines from './pages/TopHeadlines'
import AllNews from './pages/AllNews'
import Weather from './pages/weather'


function App() {  
  return (
    <>
    <Navbar/>
    <div className='mt-4'>
      <Routes>
        <Route path='/' element={<TopHeadlines/>} />
        <Route path='/all' element={<AllNews/>} />
        <Route path='/weather' element={<Weather/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
