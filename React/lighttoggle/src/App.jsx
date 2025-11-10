import { useState } from 'react'
import './App.css'

function App() {
  const [isLight,setIsLight]=useState(true);

  const toggleLight=()=>{
    setIsLight(!isLight);
};

  return (
    <div className={isLight ? "light" : "dark"}>
      <h1>{isLight ? "Lightmode " : "Darkmode"}</h1>
      <button onClick={toggleLight}>
        {isLight ?"🌚" : "🌞"} 
      </button>
    </div>
  );
}

export default App
