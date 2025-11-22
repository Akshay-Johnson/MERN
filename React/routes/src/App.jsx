import './App.css'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Navbar from './components/navbar.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;
