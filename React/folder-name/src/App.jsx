import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = 'React'
  const fruits = ['Apple', 'Banana', 'Cherry']
  const numbers = [1, 2, 3, 4, 5]
  const cars = [ "BMW", "Audi", "Mercedes" ];
  const lists =[];

  for(let i =0;i < cars.length;i++){
    lists.push(<p key={i}>{cars[i]}</p>);
  }

  
  return (
  <div>
    <h1>Hello {name}!</h1>
    <h2> cars list </h2>
    {lists}
    {fruits.map(fruits => <p>{fruits}</p>)}
    <ul>
      {numbers.map(num => (
        <li key={num}>Number: {num}</li>
      ))}
    </ul>
    

  </div>
  
  )
}

export default App
