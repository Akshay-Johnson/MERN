import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from '../components/Header/Header.jsx';
import MainContent from '../components/MainContent/MainContent.jsx';
import Footer from '../components/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>,
)
