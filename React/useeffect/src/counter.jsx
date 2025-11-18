import { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("count changed:", count);
  }, [count])

  return (
    <>
      <h2>Counter Component: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default Counter
