import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Movies from './pages/Movies'
import Upcoming from './pages/Upcoming'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'
import Terms from './pages/Terms'
import UpDet from './components/UpDet'
import Upc from './components/Upc'
import RunDet from './components/RunDet'
import Timeslote from './components/Timeslote'
import Confirmation from './components/Confirmation'
import Qr from './components/Qr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Ucoming-movies" element={<Upcoming />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Upc" element={<Upc />} />
        <Route path="/UpDet/:id" element={<UpDet />} />
        <Route path="/RunDet/:id" element={<RunDet />} />
        <Route path="/timeslote/:id/:showtimeId" element={<Timeslote />} />
        <Route path="/confirmation" element={<Confirmation/>} />
        <Route path="/qr" element={<Qr/>} />
      </Routes>
    </>
  )
}

export default App
