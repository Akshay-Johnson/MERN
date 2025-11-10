import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/Card.jsx'
import img from './assets/img.jpg'
import img2 from './assets/img2.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card image={img} title="Image 1" />
    <Card image={img2} title="Image 2" />
    <Card image={img} title="Image 3" />
  </StrictMode>,
)
