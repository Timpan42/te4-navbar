import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/modern-css-reset/dist/reset.min.css'
import './App.css'
import NavBar from './componets/NaveBar'
import Homepage from './pages/Homepage'
import Todopage from './pages/Todopage'
import EpicStorypage from './pages/EpicStorypage'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/todo' element={<Todopage />} />
          <Route path='/story' element={<EpicStorypage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
