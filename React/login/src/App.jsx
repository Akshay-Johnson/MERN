import { useState } from 'react'
import './App.css'
import Greeting from './greeting.jsx'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      <div>
        <Greeting isLoggedIn={loggedIn} />
        <button onClick={() => setLoggedIn(!loggedIn)}>
          {loggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </>
  )
}

export default App
