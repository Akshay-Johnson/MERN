import './App.css'
import { useState } from 'react'
import Color from './components/color.jsx'

function App() {
  const [bgColor,setbgColor]=useState('black');
  
  const colorChange = (Color) => {
    setbgColor(Color);
  }
  return (
    <>
      <body style={{ backgroundColor: bgColor }}></body>
      <Color onColorChange={colorChange} />
    </>
  );
}

export default App;
