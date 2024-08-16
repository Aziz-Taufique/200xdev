import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const increaseValue = () => {
    // setCount((count) => count  * 2)
    setCount(Math.random())
  }

  return (
    <div>
     <button onClick={increaseValue}>Count is {count}</button>
    </div>
  )
}

export default App
