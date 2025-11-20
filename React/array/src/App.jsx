import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const names =[
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve"
  ]
 //without bullet points
  return (
      <div>
        <h1>Names</h1>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        
      </div>
  )
}

export default App
