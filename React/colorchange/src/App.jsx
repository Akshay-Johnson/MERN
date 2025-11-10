import './App.css'
import { useState } from 'react'
import Color from './components/color.jsx'

function App() {
  const [bgColor,setbgColor]=useState('black');
  
  const colorChange = (Color) => {
    setbgColor(Color);
  }
  return (
    <div>
      <body style={{ backgroundColor: bgColor }}></body>
      <Color onColorChange={colorChange} />
    </div>
  );
}

export default App;
