import React, { useEffect, useState } from 'react'

function Assignment1() {
    const [value, setValue] = useState(0)

    const handleValue = () => {
        setValue(value + 1)
    }
   
  return (
    <div>
        <input onChange={(e) => setValue(e.target.value)} type="text" placeholder='Enter value here' />
        <button onClick={handleValue}>Click me</button>
        <h3>factorial of given number is {value}</h3>
    </div>
  )
}

export default Assignment1
