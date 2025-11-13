import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dayjs from 'dayjs';


function App() {
 
  const name = "Akshay"
  const productcost=10+8*2;
  console.log(productcost);
  const shippingcost=5;
  const totalcost=productcost+shippingcost;
  console.log(totalcost);
  const todaysDate = dayjs().format('MMMM D');
  const currentTime= dayjs().format('h:mm :ss');
  return (
    <>
      <div>
        <button>Good Job</button>
        <p>My name is {name} </p>
        <p>Product Cost: {productcost}</p> 
        <p>Shipping Cost: {shippingcost}</p>
        <p>Total Cost: {totalcost}</p>
        <button>Place your order</button>
       </div>

      <div className="productcard">
        <h2>Cotton Socks</h2>
        <p>Price: $10</p>
        <button>Add to cart</button>
      </div>
      <div>
        <p>Today's Date: {todaysDate}</p>
        <p>Current Time: {currentTime}</p>
      </div>
      






    </>
  )
}

export default App
